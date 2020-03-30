import React from "react";
import { TextField, Button } from "@material-ui/core";

export const initialValues = {
  login: "",
  password: ""
};

export const LoginForm = ({
  handleSubmit,
  handleChange,
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleBlur
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="user-login"
        label="Email/Nom d'utilisateur"
        name="login"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.login}
        error={touched.login && errors.login !== undefined}
        helperText={touched.login && errors.login}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="password-login"
        label="Mot de passe"
        name="password"
        type="password"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={touched.password && errors.password !== undefined}
        helperText={touched.password && errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
      >
        SE CONNECTER
      </Button>
    </form>
  );
};
