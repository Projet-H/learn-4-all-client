import { toast } from "react-toastify";

const optionsSucces = {
  containerId: "mainToast",
  type: toast.TYPE.SUCCESS,
  hideProgressBar: true,
  autoClose: 5000
};

export const success = text => {
  toast(text, optionsSucces);
};

const optionsWarning = {
  containerId: "mainToast",
  type: toast.TYPE.WARNING,
  hideProgressBar: true,
  autoClose: 5000
};
export const warning = text => {
  toast(text, optionsWarning);
};

const optionsFail = {
  containerId: "mainToast",
  type: toast.TYPE.ERROR,
  hideProgressBar: true,
  autoClose: 5000
};
export const fail = text => {
  toast(text, optionsFail);
};

const optionsMessage = {
  containerId: "mainToast",
  type: toast.TYPE.INFO,
  hideProgressBar: true,
  autoClose: 5000
};
export const message = text => {
  toast(text, optionsMessage);
};
