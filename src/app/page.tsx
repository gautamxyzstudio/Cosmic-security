import HomeTop from '@/appComponents/home/HomeTop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeAbout from '@/appComponents/home/HomeAbout';
import HomeTicker from '@/appComponents/home/HomeTicker';
import HomeServices from '@/appComponents/home/HomeServices';
import HomeContactUs from '@/appComponents/home/HomeContactUs';
import HomeWhyChooseUs from '@/appComponents/home/HomeWhyChooseUs';
import HomeWhyChooseUsMobile from '@/appComponents/home/HomeWhyChooseUsMobile';
export default function Home() {
  return (
    <div className="max-w-screen-2xl mb-20 bg-webBg mx-auto">
      <div className="bg-background">
        <HomeTop />
      </div>
      <HomeAbout />
      <HomeTicker />
      <HomeServices />
      <div className="hidden xl:inline-block">
        <HomeWhyChooseUs />
      </div>
      <div className="xl:hidden mt-10 w-full  inline-block">
        <HomeWhyChooseUsMobile />
      </div>
      <HomeContactUs />
    </div>
  );
}
