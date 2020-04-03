import React from "react";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  title: "",
  description: ""
};

export const IssuesForm = ({
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
        id="title"
        label="Titre du problème"
        name="title"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        error={touched.title && errors.title !== undefined}
        helperText={touched.title && errors.title}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="description"
        label="Description du problème"
        name="description"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        error={touched.description && errors.description !== undefined}
        helperText={touched.description && errors.description}
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
