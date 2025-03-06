import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig: ToastOptions = {
  position: "bottom-left",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    fontFamily: "Poppins",
    fontSize: "16px",
  },
};

export const showSuccessToast = (message: string) => {
  toast.success(message, toastConfig);
};

export const showErrorToast = (message: string) => {
  toast.error(message, toastConfig);
};

export const showInfoToast = (message: string) => {
  toast.info(message, toastConfig);
};
