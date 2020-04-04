import React, { useRef } from "react";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { School as SchoolIcon } from "@material-ui/icons";

import { useStyles } from "./useStyles";

export const initialValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  confirmPassword: "",
  level: "",
};

export const RegisterForm = ({
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
  const inputLabel = useRef(null);

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={6}>
          <TextField
            className={classes.field}
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
            className={classes.field}
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
        <Grid item xs={12}>
          <TextField
            className={classes.field}
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
            className={classes.field}
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
            className={classes.field}
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
        <Grid item xs={12} className={classes.iconSchool}>
          <SchoolIcon />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.field}>
            <InputLabel
              ref={inputLabel}
              id="level-label"
              className={classes.formLabel}
            >
              Niveau d'étude *
            </InputLabel>
            <Select
              labelId="level-label"
              name="level"
              onChange={handleChange}
              onBlur={handleBlur}
              className={classes.formSelect}
            >
              <MenuItem value="primaire">Primaire</MenuItem>
              <MenuItem value="college">Collège</MenuItem>
              <MenuItem value="lycee">Lycée</MenuItem>
              <MenuItem value="ecolesuperieur">École supérieur</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {errors.level ? (
            <p className={classes.errorLevel}>
              Learn4all accueil une communauté passant un diplôme en fin
              d'année. <br />
              Vous n'êtes pas autorisé à vous inscrire.
            </p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.submit}
      >
        S'inscrire
      </Button>
    </form>
  );
};
