import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { initialValues, ClassForm } from "./ClassForm";
import { classSchema } from "./classSchema";
import { Class } from "../../../services/class";
import { CLASS } from "../../../helpers/route-constant";
import { useStyles } from "./useStyles";

export const ClassNew = () => {
  const classes = useStyles();
  const slugify = require("slugify");
  const { push } = useHistory();

  const handleSubmit = async ({ name }, { setErrors }) => {
    const slug = slugify(name, { remove: /[*+~.()'"!:@/\\]/g, lower: true });
    const jsonClass = { name, slug, active: false };

    const data = await Class.new(jsonClass);
    const jsonData = await data.json();

    if (data.status !== 201) {
      setErrors({ [jsonData.errors.property]: jsonData.errors.message });
    } else {
      return push(CLASS);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Classe</h2>
          <h1 className={classes.title}>Création d'une classe</h1>
        </div>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          component={ClassForm}
          validationSchema={classSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
    </div>
  );
};
