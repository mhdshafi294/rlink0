import React from "react";

const StarsCard = () => {
  return (
    <div className="absolute w-full h-full">
      {/* stars start */}
      <div className="star1 absolute top-[30%] left-[10%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>
      <div className="star2 absolute top-[40%] left-[80%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>
      <div className="star3 absolute top-[10%] left-[20%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>
      <div className="star4 absolute top-[7%] left-[50%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>
      <div className="star5 absolute top-[50%] left-[8%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>
      <div className="star6 absolute top-[34%] left-[28%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>
      <div className="star7 absolute top-[35%] left-[75%] w-[3px] h-[3px] bg-white rounded-full opacity-50"></div>

      {/* stars end */}
    </div>
  );
};

export default StarsCard;
