import React from "react";
import { useSelector } from "react-redux";

const SeatLayout = ({ text, col, row, price, onclick, selectColor }) => {
  const colorCheck = useSelector((state) => state.ticketSlice);
  // console.log(colorCheck);

  return (
    <div
      value={price}
      className={`seat ${text} ${col} ${row} cursor-pointer ${
        colorCheck.selectSeat.includes(text) ? "selected" : ""
      } ${colorCheck.bookTicket.includes(text) ? "booked" : ""}`}
      onClick={onclick}
    >
      {text}
    </div>
  );
};

export default SeatLayout;
