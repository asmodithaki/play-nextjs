import Slider from "@/components/Header/slider";
import ImageCarousel from "@/components/carousel/imageCarousel";

const Hero = () => {
  const imagePaths = ["/network.png", "/claudine.png", "/cognito.png"];
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-gray-700 pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center p-20 mb-20">
            <div className="w-full px-4">
              <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center content-center">
                <Slider />
                <ImageCarousel imagePaths={imagePaths} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
