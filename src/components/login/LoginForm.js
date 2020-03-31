import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./useStyles";
import { REGISTER, FORGOTPASSWORD } from "../../helpers/route-constant";

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
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="user-login"
        label="Nom d'utilisateur ou Email"
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
