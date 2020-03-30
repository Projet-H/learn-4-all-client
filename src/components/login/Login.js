import React, { useContext } from "react";
import { Avatar, Typography, Grid, Paper } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { initialValues, LoginForm } from "./LoginForm";
import { loginSchema } from "./loginSchema";
import { SessionContext, setSessionCookie } from "../../context/session";
import { Auth } from "../../services/auth";
import { CLASS } from "../../helpers/route-constant";

export const Login = () => {
  const { push } = useHistory();
  const { session, setSession } = useContext(SessionContext);

  const handleSubmit = async (
    { login, password },
    { setSubmitting, setErrors }
  ) => {
    try {
      const data = await Auth.login(login, password);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;

      setSessionCookie(jsonData.token);
      setSession({ ...session, auth: true, token: jsonData.token });

      return push(CLASS);
    } catch (err) {
      setErrors({ [err.errors.property]: err.errors.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid container component="main">
      <Grid item xs={12} component={Paper} square>
        <div>
          <Avatar>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se connecter
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={LoginForm}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
        </div>
      </Grid>
    </Grid>
  );
};
