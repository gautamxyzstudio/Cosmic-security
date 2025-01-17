import HomeTop from '@/appComponents/home/HomeTop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeAbout from '@/appComponents/home/HomeAbout';
import HomeTicker from '@/appComponents/home/HomeTicker';
import HomeServices from '@/appComponents/home/HomeServices';
import HomeContactUs from '@/appComponents/home/HomeContactUs';
import HomeWhyChooseUs from '@/appComponents/home/HomeWhyChooseUs';
export default function Home() {
  return (
    <div className="max-w-screen-2xl bg-webBg mx-auto">
      <HomeTop />
      <HomeAbout />
      <HomeTicker />
      <HomeServices />
      <HomeWhyChooseUs />
      <HomeContactUs />
    </div>
  );
}
