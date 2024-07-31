import Banner from "@/components/home/Banner";
import CalendarEvents from "@/components/home/Calenadar";
import NextSlider from "@/components/home/NextSlider";
import SwiperSlider from "@/components/home/Slider";
import SocialSection from "@/components/home/SocialSection";


export default function Home() {
  return (
    <>
      <Banner />
      <SwiperSlider />
      <CalendarEvents />
      {/* <SocialSection /> */}
      <NextSlider />
    </>
  );
}
