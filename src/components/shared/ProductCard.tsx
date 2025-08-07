

function ProductCards() {
  return (
    <div className="flex justify-center mx-auto px-8 gap-6 w-full mb-50">
      {/* Container for product cards */}
      <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-5xl mx-auto">
        
        {/* Rectangular Card */}
        <div className="bg-theme-yellow rounded-[32px] overflow-hidden shadow-lg w-[50%] h-[250px] ">
          <p></p>
        </div>
        
        {/* Square Card */}
        <div className="bg-theme-yellow rounded-[32px] overflow-hidden shadow-lg w-[25%] h-[250px] ">
          <p></p>
        </div>

        <div className="bg-theme-yellow rounded-[32px] overflow-hidden shadow-lg w-[25%] h-[250px] ">
          <p></p>
        </div>

      </div>
    </div>
  );
}

export default ProductCards;