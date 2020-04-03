import React, { useContext } from "react";
import { Formik } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { initialValues, SubjectForm } from "./SubjectForm";
import { subjectSchema } from "./subjectSchema";
import { SessionContext } from "../../../context/session";
import { Subject } from "../../../services/subject";
import { roleById, role } from "../../../helpers/constants";
import { success, warning, fail } from "../../common/Toast";
import { useStyles } from "./useStyles";

export const SubjectNew = () => {
  const classes = useStyles();
  const slugify = require("slugify");
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { user } = useContext(SessionContext);
  const firstpoint = pathname.split("/")[1];

  const handleSubmit = async ({ name }, { setErrors }) => {
    const slug = slugify(name, { remove: /[*+~.()'"!:@/\\]/g, lower: true });
    const active = roleById[user.role] === role.ADMIN ? true : false;

    const data = await Subject.new(firstpoint, slug, name, active);
    const jsonData = await data.json();

    if (data.status !== 201) {
      fail(
        "Une erreur s'est produite lors de la création de la matière. Veuillez réessayez ultérieurement."
      );
      setErrors({ [jsonData.errors.property]: jsonData.errors.message });
    } else {
      roleById[user.role] === role.ADMIN
        ? success("La création de la matière est validé.")
        : warning(
            "La création de la matière est en attente de validation par l'administration."
          );
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
