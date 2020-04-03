import React, { useContext } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { initialValues, LoginForm } from "./LoginForm";
import { loginSchema } from "./loginSchema";
import { SessionContext, setSessionCookie } from "../../context/session";
import { Auth } from "../../services/auth";
import { CLASS, PROFIL } from "../../helpers/route-constant";
import { roleIdByName } from "../../helpers/constants";
import { getSessionCookie } from "../../context/session";
import { ability, defineRulesFor } from "../../helpers/ability";
import { useStyles } from "./useStyles";

export const Login = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { session, setSession } = useContext(SessionContext);

  const handleSubmit = async (
    { email, password },
    { setSubmitting, setErrors }
  ) => {
    try {
      const data = await Auth.login(email, password);
      const jsonData = await data.json();

      if (data.status !== 201) throw jsonData;

      setSessionCookie(jsonData.accessToken);
      setSession({ ...session, auth: true, token: jsonData.accessToken });

      if (getSessionCookie().token) {
        const currentAuth = jwt_decode(getSessionCookie().token);
        ability.update(defineRulesFor(currentAuth));
      }

      const currentAuth = jwt_decode(jsonData.accessToken);
      return currentAuth.role === roleIdByName.UNKNOWN
        ? push(PROFIL)
        : push(CLASS);
    } catch (err) {
      setErrors({ [err.errors.property]: err.errors.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        md={4}
        component={Paper}
        square
        className={classes.grid}
      >
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.typography}
          >
            <span className={classes.slash}>/</span>Se connecter
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
      <Grid item xs={false} md={8} className={classes.image}>
        <div className={classes.backgroundTitle}>
          <h2 className={classes.title}>Learn4all</h2>
        </div>
      </Grid>
    </Grid>
  );
};
