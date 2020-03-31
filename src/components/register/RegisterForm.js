import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";

export const initialValues = {
  email: "",
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  confirmPassword: ""
};

export const RegisterForm = ({
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            id="lastname"
            name="lastname"
            label="Nom *"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
            error={touched.lastname && errors.lastname !== undefined}
            helperText={touched.lastname && errors.lastname}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            id="firstname"
            name="firstname"
            label="Prénom *"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
            error={touched.firstname && errors.firstname !== undefined}
            helperText={touched.firstname && errors.firstname}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            id="username"
            name="username"
            label="Nom d'utilisateur *"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={touched.username && errors.username !== undefined}
            helperText={touched.username && errors.username}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            id="email"
            name="email"
            label="Email *"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email !== undefined}
            helperText={touched.email && errors.email}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            variant="outlined"
            size="small"
            id="password"
            name="password"
            label="Mot de passe *"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password !== undefined}
            helperText={touched.password && errors.password}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            variant="outlined"
            size="small"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmation du mot de passe *"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={
              touched.confirmPassword && errors.confirmPassword !== undefined
            }
            helperText={touched.confirmPassword && errors.confirmPassword}
          ></TextField>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
      >
        S'inscrire
      </Button>
    </form>
  );
};
