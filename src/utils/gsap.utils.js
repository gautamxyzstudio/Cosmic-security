/* eslint-disable @typescript-eslint/no-unused-expressions */
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
   export function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};

    // Define a base screen width (e.g., 1920px for a typical desktop)
    const baseScreenWidth = 1920;

    // Function to calculate scaleFactor based on the window width
    const calculateScaleFactor = () => {
      return window.innerWidth / baseScreenWidth; // Adjust base width as needed
    };

    // Initial scaleFactor (for speed adjustment based on screen size)
    let scaleFactor = calculateScaleFactor();
    let pixelsPerSecond = (config.speed || 1) * 100 * scaleFactor; // Speed based on scaleFactor

    let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });

    let length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

    gsap.set(items, {
      // Convert "x" to "xPercent" and calculate initial widths/xPercents
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
            gsap.getProperty(el, 'xPercent')
        );
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });

    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] - startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], 'scaleX') +
      (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add('label' + i, distanceToStart / pixelsPerSecond);

      times[i] = distanceToStart / pixelsPerSecond;
    }

    // Function to update the timeline's progress and adjust speed on resize
    function updateSpeedOnResize() {
      scaleFactor = calculateScaleFactor();
      pixelsPerSecond = (config.speed || 1) * 100 * scaleFactor;
      tl.progress(0, true); // Reset timeline progress for smooth transition
    }

    // Update speed dynamically on resize
    window.addEventListener('resize', updateSpeedOnResize);

    // Function to navigate to a specific index
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // Always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // If wrapping the timeline's playhead, adjust accordingly
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // Pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    // Force hardware acceleration for smooth rendering in Safari (especially on mobile)
    items.forEach(item => {
      gsap.set(item, {
        willChange: 'transform', // Hint to the browser that this element will be animated
      });
    });

    return tl;
  }


export function verticalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startY = items[0].offsetTop,
    times = [],
    heights = [],
    yPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalHeight,
    curY,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    // Convert "y" to "yPercent" and populate heights/yPercents for faster lookups.
    yPercent: (i, el) => {
      let h = (heights[i] = parseFloat(gsap.getProperty(el, 'height', 'px')));
      yPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'y', 'px')) / h) * 100 +
          gsap.getProperty(el, 'yPercent')
      );
      return yPercents[i];
    },
  });
  gsap.set(items, { y: 0 });
  totalHeight =
    items[length - 1].offsetTop +
    (yPercents[length - 1] / 100) * heights[length - 1] -
    startY +
    items[length - 1].offsetHeight *
      gsap.getProperty(items[length - 1], 'scaleY') +
    (parseFloat(config.paddingBottom) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curY = (yPercents[i] / 100) * heights[i];
    distanceToStart = item.offsetTop + curY - startY;
    distanceToLoop =
      distanceToStart + heights[i] * gsap.getProperty(item, 'scaleY');
    tl.to(
      item,
      {
        yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          yPercent: snap(
            ((curY - distanceToLoop + totalHeight) / heights[i]) * 100
          ),
        },
        {
          yPercent: yPercents[i],
          duration:
            (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add('label' + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // Pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}



export function horizontalCurveLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  
  const curvePath = config.path || {
    // Example curve path (adjust as needed for your design)
    path: [
      { x: 0, y: 0 },
      { x: 200, y: -50 },
      { x: 400, y: 0 },
      { x: 600, y: 50 },
      { x: 800, y: 0 }
    ],
  };

  const tl = gsap.timeline({
    repeat: config.repeat || -1, 
    paused: config.paused || false,
    defaults: { ease: 'none' },
  });

  const pixelsPerSecond = (config.speed || 1) * 100;

  items.forEach((item, index) => {
    const duration = curvePath.path.length / pixelsPerSecond;

    tl.to(item, {
      motionPath: {
        path: curvePath.path,
        align: curvePath.path,
        alignOrigin: [0.5, 0.5],
      },
      duration: duration,
    }, index * duration / items.length);
  });

  return tl;
}