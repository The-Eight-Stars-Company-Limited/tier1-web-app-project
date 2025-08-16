import BlueShade from '@/components/shared/BlueShade';
import ImageSLider from '@/components/shared/ImageSLider';

function AboutSection() {
  return (
    <div className="flex flex-col gap-10 mb-[7%] mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

      {/* Section Title Button */}
      <div className="inline-flex items-center justify-center px-5 py-2 font-poppins
        text-sm sm:text-base md:text-lg text-[#072C8B] font-semibold
        m-auto border-2 border-[#072C8B] w-[130px] h-[50px]
        rounded-full cursor-pointer
      ">
        About us
      </div>

      {/* Section Content */}
      <div className="relative w-full">

        {/* Decorative Blue Circles (Only on LG+) */}
        <div className="hidden lg:flex">
          <BlueShade size="50px" position={{ top: "-80px", left: "0px" }} color="#072C8B" />
          <BlueShade size="80px" position={{ bottom: "20px", left: "200px" }} color="#072C8B" />
          <BlueShade size="80px" position={{ bottom: "0px", left: "0px" }} color="#FFD27F" thickness="15px" variant="hollow" />
          <BlueShade size="50px" position={{ top: "-20px", left: "300px" }} color="#FFD27F" thickness="7.5px" variant="hollow" />
        </div>

        {/* Main Grid: Text & Slider */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10 md:gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-[#072C8B] font-semibold">
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              What we Do
            </h2>

            <div className="flex flex-col gap-4">
              <p className="font-poppins text-base sm:text-lg text-theme-blue/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae,
                modi quo natus consequuntur quas perspiciatis repellendus iusto eaque a adipisci
                at nostrum ea molestiae reiciendis doloremque dolore illum iste!
              </p>
              <p className="font-poppins text-base sm:text-lg text-theme-blue/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Et modi ut consequatur repellat facere tempore magni tenetur deserunt.
                Sit maxime officia eligendi beatae dicta fugiat distinctio libero quisquam
                possimus consequatur!
              </p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/2">
            <ImageSLider />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
