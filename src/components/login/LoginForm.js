import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./useStyles";
import { REGISTER, FORGOTPASSWORD } from "../../helpers/route-constant";

export const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = ({
  handleSubmit,
  handleChange,
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleBlur,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="email"
        label="Email"
        name="email"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={touched.email && errors.email !== undefined}
        helperText={touched.email && errors.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="password"
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
      {errors.unauthorized ? (
        <span className={classes.error}>{errors.unauthorized}</span>
      ) : (
        ""
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.submit}
      >
        SE CONNECTER
      </Button>
      <Grid container>
        <Grid item xs>
          <Typography variant="body2" className={classes.forgot}>
            <Link to={FORGOTPASSWORD}>Mot de passe oublié ?</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.register}>
            <Link to={REGISTER}>Vous n'avez pas de compte ?</Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};
