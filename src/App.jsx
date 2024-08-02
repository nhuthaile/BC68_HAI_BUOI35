import SeatLayout from "./components/SeatLayout";
import "./appStyle.scss";
import { useDispatch, useSelector } from "react-redux";
import { bookTicket, deleteTicket, selectTicket } from "./redux/ticketSlice";

function App() {
  let seatArr = [];
  let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0; i < letter.length; i++) {
    for (let j = 1; j <= 12; j++) {
      let obj = {};
      obj.text = `${letter[i]}${j}`;
      obj.row = `row-${letter[i]}`;
      obj.col = `col-${j}`;
      obj.price = 75000;
      seatArr.push(obj);
    }
  }
  //  DÙNG USESELECTOR ĐỂ IN SỐ LIỆU RA TABLE
  const booking = useSelector((state) => state.ticketSlice);

  const dispatch = useDispatch();

  // console.log(booking.ticket);
  // console.log(booking.length);
  // console.log(totalMoney);
  // console.log(booking);
  // console.log(booking.class);
  return (
    <div className="movie_ticket ">
      <div className="overlay">
        <div className="container py-20 grid grid-cols-12 mx-auto gap-10 ">
          <div className="seat_layout col-span-7 text-center">
            <h2 className="text-4xl text-yellow-500">
              ĐẶT VÉ XEM PHIM CYBERLEARN.VN
            </h2>
            <p>Màn Hình</p>
            <div className="screen "></div>
            <div className="seat_option  mx-auto text-white mt-10">
              {seatArr.map((item, index) => {
                return (
                  <SeatLayout
                    key={index}
                    text={item.text}
                    row={item.row}
                    col={item.col}
                    price={item.price}
                    onclick={() => {
                      dispatch(
                        selectTicket({
                          price: item.price,
                          text: item.text,
                        })
                      );
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="selection_result col-span-5 pt-20 ">
            <h2 className="text-4xl text-center text-white">
              DANH SÁCH GHẾ BẠN CHỌN
            </h2>
            <div className="legend space-y-2 my-5">
              <div className="flex items-center">
                <div className="color w-5 h-5 bg-orange-500 mr-2"></div>
                <span>Ghế Đã Đặt</span>
              </div>
              <div className="flex items-center">
                <div className="color w-5 h-5 bg-green-500 mr-2"></div>
                <span>Ghế Đang Chọn</span>
              </div>
              <div className="flex items-center">
                <div className="color w-5 h-5 bg-white border border-orange-500 mr-2"></div>
                <span>Ghế Chưa Đặt</span>
              </div>
            </div>
            <table className="mt-5">
              <thead>
                <tr>
                  <th>Số Ghế</th>
                  <th>Giá</th>
                  <th>Huỷ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-yellow-500">{booking.ticket[0]?.text}</td>
                  <td className="text-yellow-500">
                    {booking.ticket[0]?.price}
                  </td>
                  <td
                    onClick={() => {
                      dispatch(deleteTicket(`${booking.ticket[0]?.text}`));
                    }}
                    className={`text-red-500  cursor-pointer`}
                  >
                    X
                  </td>
                </tr>
                <tr>
                  <td className="text-yellow-500">{booking.ticket[1]?.text}</td>
                  <td className="text-yellow-500">
                    {booking.ticket[1]?.price}
                  </td>
                  <td
                    onClick={() => {
                      dispatch(deleteTicket(`${booking.ticket[0]?.text}`));
                    }}
                    className={`text-red-500  cursor-pointer`}
                  >
                    X
                  </td>
                </tr>
                <tr>
                  <td className="text-yellow-500">{booking.ticket[2]?.text}</td>
                  <td className="text-yellow-500">
                    {booking.ticket[2]?.price}
                  </td>
                  <td
                    onClick={() => {
                      dispatch(deleteTicket(`${booking.ticket[0]?.text}`));
                    }}
                    className={`text-red-500  cursor-pointer`}
                  >
                    X
                  </td>
                </tr>

                <tr>
                  <td className="text-white">Tổng Tiền</td>
                  <td className="text-yellow-500">{booking.tongTien}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="confirm">
              <div className="hoTen">
                <label
                  className="block text-xl text-yellow-500 mt-5"
                  htmlFor=""
                >
                  Nhập Họ Tên
                </label>
                <input
                  className="block w-full px-2 py-2 rounded-md"
                  type="text"
                  placeholder="Vui lòng nhập họ tên"
                />
              </div>
              <div className="soDienThoai">
                <label
                  className="block text-xl text-yellow-500 mt-5"
                  htmlFor=""
                >
                  Nhập Số Điện Thoại
                </label>
                <input
                  className="block w-full px-2 py-2 rounded-md"
                  type="text"
                  placeholder="Vui lòng nhập số điện thoại"
                />
              </div>
              <div className="button text-center">
                <button
                  onClick={() => {
                    dispatch(bookTicket());
                  }}
                  className="bg-orange-500 px-6 py-3 text-white rounded-md mx-auto mt-5"
                >
                  Đặt Vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
