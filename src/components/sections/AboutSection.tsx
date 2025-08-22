import BlueShade from '@/components/shared/BlueShade';
import ImageSLider from '@/components/shared/ImageSLider';

function AboutSection() {
  return (
    <div className="flex flex-col gap-10 mb-[7%] mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

      {/* Section Title Button */}
      <div className="
        inline-flex items-center justify-center 
        font-poppins text-[#072C8B] font-semibold
        m-auto border-2 border-[#072C8B] 
        rounded-full cursor-pointer shadow-md
        
        w-[110px] h-[45px]
        text-sm 
        px-3 py-3
        mb-10

        md:text-base
        md:w-[130px] md:h-[50px] md:mb-15
        md:shadow-lg
      ">
        About us
      </div>

      {/* Section Content */}
      <div className="relative w-full">

        {/* Decorative Blue Circles (Only on LG+) */}
        <div className="hidden md:flex md:shadow-lg">
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

            <div className="
              flex flex-col gap-4
              font-poppins font-normal
              text-base text-theme-blue/80 
              leading-7
              mb-15
              
              md:text-lg md:mb-0 lg:mb-0
            ">
              <p>
              The Eight Stars Company Limited is a trusted name in Ghana’s building and construction industry. 
              For over six years, we have been providing developers, contractors, and property owners with reliable products 
              and services that bring projects to life.
              </p>
              <p>
              We manufacture high-quality concrete and pavement blocks while also supplying a 
              wide range of essential building materials, including cement, sand, iron rods, roofing sheets, 
              tiles, paints, and fittings. As a one-stop supplier, we make construction easier by 
              providing reliable materials delivered on time with consistent quality.
              </p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/2 mb-10">
            <ImageSLider />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
