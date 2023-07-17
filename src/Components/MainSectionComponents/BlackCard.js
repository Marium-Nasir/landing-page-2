import React from "react";

const BlackCard = () => {
  return (
    <>
      <div className="lg:p-[70px] p-[50px] mt-[50px] border-2 border-[#7AD3F7] flex flex-col items-center justify-center text-[white] font-[DIN Condensed] bg-gradient-radial from-[#303030] via-[#181818] to-[#000000]">
        <div className="m-[4rem]">
          <p className="font-bold lg:text-[63px] text-[30px] text-center">
            Sul on selgroogu! Vaata nõuandeid mida öelda ja teha.
          </p>
        </div>
        <div className="text-[27px] bg-[white] w-[250px] text-[#000000] font-bold rounded-md mt-[20px] md:text-[21px] text-[18px] p-[10px]">
          <p className="text-center" >Vaata nõuandeid</p>
        </div>
      </div>
    </>
  );
};

export default BlackCard;
