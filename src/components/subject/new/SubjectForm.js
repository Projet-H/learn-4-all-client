import React from "react";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  name: ""
};

export const SubjectForm = ({
  handleSubmit,
  handleChange,
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleBlur
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="name"
        label="Nom de la matière"
        name="name"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={touched.name && errors.name !== undefined}
        helperText={touched.name && errors.name}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.button}
      >
        CRÉER
      </Button>
    </form>
  );
};
