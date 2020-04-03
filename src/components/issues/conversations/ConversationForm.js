import React from "react";
import { Button, TextField } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  message: ""
};

export const ConversationForm = ({
  handleSubmit,
  handleChange,
  values,
  isValid,
  handleBlur
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        className={classes.field}
        variant="filled"
        required
        id="message"
        label="Écrivez un message..."
        name="message"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.message}
      />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className={classes.button}
        disabled={!isValid}
      >
        ENVOYER
      </Button>
    </form>
  );
};
