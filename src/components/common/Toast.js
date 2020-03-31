import React, { createRef } from "react";
import { useSnackbar, SnackbarProvider } from "notistack";
import { Button } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

let useSnackbarRef;
const setUseSnackbarRef = useSnackbarRefProp => {
  useSnackbarRef = useSnackbarRefProp;
};

const notistackRef = createRef();
const onClickDismiss = key => () => {
  notistackRef.current.closeSnackbar(key);
};

const InnerSnackbarConfigurator = ({ setUseSnackbarRef }) => {
  setUseSnackbarRef(useSnackbar());
  return null;
};

export const Snackbar = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      style={{ whiteSpace: "pre-line" }}
      ref={notistackRef}
      action={key => (
        <Button onClick={onClickDismiss(key)}>
          <CloseIcon />
        </Button>
      )}
    >
      <InnerSnackbarConfigurator setUseSnackbarRef={setUseSnackbarRef} />
      {children}
    </SnackbarProvider>
  );
};

export default {
  success(msg) {
    this.toast(msg, "success");
  },
  error(msg) {
    this.toast(msg, "error");
  },
  warning(msg) {
    this.toast(msg, "warning");
  },
  message(msg) {
    this.toast(msg, "message");
  },
  toast(msg, variant = "default") {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  }
};
