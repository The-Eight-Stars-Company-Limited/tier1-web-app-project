import Image from 'next/image'
import React from 'react'
import BlueShade from './BlueShade'
import ImageSLider from './ImageSLider'

const About = () => {
  return (
    <div className='flex flex-col gap-10 mb-[7%]'>
      <div className="inline-flex items-center justify-center px-[35px] py-[15px] text-1xl text-[#072C8B] font-semibold m-auto border-3 border-[#072C8B] w-[145px] h-[50px] rounded-full cursor-pointer" >
         About us
      </div>
      <div className="relative">
        <div className='hidden lg:flex'>
        <BlueShade size="80px" position={{ top: "70px", left: "0px" }} color="#072C8B" /> 
        <BlueShade size="40px" position={{ bottom: "30px", left: "200px" }} color="#072C8B" />
        <BlueShade size="80px" position={{ bottom: "-10px", left: "0px" }} color="white" thickness="15px" variant="hollow" />
        <BlueShade size="40px" position={{ top: "100px", left: "300px" }} color="white" thickness="7.5px" variant="hollow" />
        </div>
        <h2 className='text-4xl font-bold text-[#072C8B] mb-3'>What We Do </h2>
        <div className='flex flex-col md:flex-row items-center w-full'>
            <div className="flex w-full flex-col gap-5 lg:w-1/2 text-[#072C8B] font-semibold">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae, modi quo natus consequuntur quas perspiciatis repellendus iusto eaque a adipisci at nostrum ea molestiae reiciendis doloremque dolore illum iste!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi ut consequatur repellat facere tempore magni tenetur deserunt. Sit maxime officia eligendi beatae dicta fugiat distinctio libero quisquam possimus consequatur!</p>
            </div>
          <div className="w-full">
            <ImageSLider/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
