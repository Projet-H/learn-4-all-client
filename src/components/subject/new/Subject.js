import React from "react";
import { Formik } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { initialValues, SubjectForm } from "./SubjectForm";
import { subjectSchema } from "./subjectSchema";
import { Subject } from "../../../services/subject";
import { useStyles } from "./useStyles";

export const SubjectNew = () => {
  const classes = useStyles();
  const slugify = require("slugify");
  const { pathname } = useLocation();
  const { push } = useHistory();
  const firstpoint = pathname.split("/")[1];

  const handleSubmit = async ({ name }, { setErrors }) => {
    const slug = slugify(name, { remove: /[*+~.()'"!:@/\\]/g, lower: true });

    const data = await Subject.new(firstpoint, slug, name);
    const jsonData = await data.json();

    if (data.status !== 201) {
      setErrors({ [jsonData.errors.property]: jsonData.errors.message });
    } else {
      return push(`/${firstpoint}/subject`);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Matière</h2>
          <h1 className={classes.title}>Création d'une matière</h1>
        </div>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          component={SubjectForm}
          validationSchema={subjectSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
    </div>
  );
};
