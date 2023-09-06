import { Slide, toast } from "react-toastify";

export const TostMessage = (msg, type) => {
  return toast(msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: type,
    transition: Slide,
    theme: "colored",
  });
};
