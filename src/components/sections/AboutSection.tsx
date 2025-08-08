import BlueShade from '@/components/shared/BlueShade'
import ImageSlider from '@/components/shared/ImageSlider'

function AboutSection() {
  return (
    <div className='flex flex-col gap-10 mb-[7%] mx-auto px-4 max-w-7xl'>
      <div className="inline-flex items-center justify-center px-[20px] py-[10px] font-poppins 
        text-lg text-[#072C8B] font-semibold m-auto border-2 border-[#072C8B] 
        w-[130px] h-[50px] rounded-full cursor-pointer
      ">
        About us
      </div>

      <div className="relative">
        <div className='hidden lg:flex'>
          <BlueShade size="80px" position={{ top: "20px", left: "0px" }} color="#072C8B" />
          <BlueShade size="80px" position={{ bottom: "20px", left: "200px" }} color="#072C8B" />
          <BlueShade size="80px" position={{ bottom: "0px", left: "0px" }} color="#FFD27F" thickness="15px" variant="hollow" />
          <BlueShade size="80px" position={{ top: "70px", left: "300px" }} color="#FFD27F" thickness="7.5px" variant="hollow" />
        </div>

        <div className='flex flex-col md:flex-row items-center w-full gap-8'>
          <div className="w-full lg:w-1/2 text-[#072C8B] font-semibold">
            <h2 className='font-poppins text-4xl font-bold mb-3'>
              What we Do
            </h2>
            
            <div className='flex flex-col gap-4'>
              <p className='font-poppins text-lg text-theme-blue/80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae, 
                modi quo natus consequuntur quas perspiciatis repellendus iusto eaque a adipisci 
                at nostrum ea molestiae reiciendis doloremque dolore illum iste!
              </p>
              <p className='font-poppins text-lg text-theme-blue/80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et modi ut consequatur repellat facere tempore magni tenetur deserunt. 
                Sit maxime officia eligendi beatae dicta fugiat distinctio libero quisquam 
                possimus consequatur!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;