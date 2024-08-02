import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: [],
  tongTien: 0,
  selectSeat: [],
  bookTicket: [],
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    selectTicket: (state, action) => {
      // console.log(action.payload);
      // Check if the ticket is selected or not
      let index = state.ticket.findIndex(
        (item) => item.text == action.payload.text
      );

      if (index != -1) {
        state.tongTien -= state.ticket[index].price;
        state.selectSeat.splice(index, 1);
        state.ticket.splice(index, 1);
      } else {
        state.tongTien += action.payload.price;
        state.ticket.push(action.payload);
        state.selectSeat.push(action.payload.text);
      }
    },
    bookTicket: (state) => {
      state.bookTicket = state.selectSeat;
    },
    deleteTicket: (state, action) => {
      let index = state.ticket.findIndex((item) => item.text == action.payload);
      if (index != -1) {
        state.ticket.splice(index, 1);
      }

      let indexSelect = state.selectSeat.findIndex(
        (item) => item == action.payload
      );
      if (indexSelect != -1) {
        state.selectSeat.splice(indexSelect, 1);
      }
    },
  },
});

export const { selectTicket, bookTicket, deleteTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
