

const Card = ({ svg, title, description }:any) => {
  return (
    <div className="h-[154px] w-[294px]  bg-gradient-to-b from-[#091474] m-[10px] to-[#7f098f] sm:w-[80%] sm:h-[104px] ">
      <div className="grid justify-items-center w-[290px] h-[150px] sm:w-[100%]  m-[2px] bg-gray-900 sm:h-[100px] "   >
        <div className="flex w-[100%] my-[10px] ml-[55px] items-center">
          {svg}
          <h2 className="flex  items-start m-0 ml-[25px] text-[19px]">{title}</h2>
        </div>
        <div className="grid m-0">        
          <p className="flex text-start m-0 text-[#92929A] text-[14px] p-[5px] mx-[15px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

