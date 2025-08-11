
import Image from "next/image";

function SquareCard({ src }: { src: string }) {
  return (
    <>
      <div 
        className="
        bg-theme-yellow rounded-[32px] shadow-lg w-[30%] h-[300px] 
        overflow-hidden flex items-center justify-center p-4
        ">
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt="Pavement Blocks"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px]"
          />
        </div>
      </div>
    </>
  );
}

export default SquareCard;
