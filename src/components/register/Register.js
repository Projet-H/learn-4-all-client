import React from "react";
import { Formik } from "formik";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { initialValues, RegisterForm } from "./RegisterForm";
import { registerSchema } from "./registerSchema";
import { Auth } from "../../services/auth";
import { LOGIN } from "../../helpers/route-constant";
import { useStyles } from "./useStyles";

export const Register = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async (
    { email, firstname, lastname, password, level },
    { setErrors }
  ) => {
    try {
      if (level === "primaire") {
        setErrors({
          unauthorized: `Learn4all accueil une communauté passant un diplôme en fin d'année. Vous n'êtes pas autorisé à vous inscrire.`,
        });
      } else {
        const data = await Auth.register({
          lastName: lastname,
          firstName: firstname,
          email,
          password,
        });
        const jsonData = await data.json();

        if (data.status !== 201) throw jsonData;

        return push(LOGIN);
      }
    } catch (error) {
      setErrors({
        error: error.message,
      });
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        md={6}
        component={Paper}
        square
        className={classes.grid}
      >
        <div className={classes.paper}>
          <Typography
            className={classes.typography}
            component="h1"
            variant="h5"
          >
            <span className={classes.slash}>/</span>S'inscrire
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={RegisterForm}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
          <Typography
            className={classes.policy}
            color="textSecondary"
            variant="body2"
          >
            Vous avez déjà un compte ? <Link to={LOGIN}>Connectez-vous</Link>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={false} md={6} className={classes.image}>
        <div className={classes.backgroundTitle}>
          <h2 className={classes.title}>Learn4all</h2>
        </div>
      </Grid>
    </Grid>
  );
};
