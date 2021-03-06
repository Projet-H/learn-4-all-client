import React, { useContext } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { initialValues, ClassForm } from "./ClassForm";
import { classSchema } from "./classSchema";
import { Class } from "../../../services/class";
import { CLASS } from "../../../helpers/route-constant";
import { SessionContext } from "../../../context/session";
import { roleById, role } from "../../../helpers/constants";
import { success, warning, fail } from "../../common/Toast";
import { useStyles } from "./useStyles";

export const ClassNew = () => {
  const classes = useStyles();
  const slugify = require("slugify");
  const { push } = useHistory();
  const { user } = useContext(SessionContext);

  const handleSubmit = async ({ name }, { setErrors }) => {
    const slug = slugify(name, { remove: /[*+~.()'"!:@/\\]/g, lower: true });
    const active =
      roleById[user.role] === role.ADMIN ? { active: true } : { active: false };

    const jsonClass = { name, slug, ...active };

    const data = await Class.new(jsonClass);
    const jsonData = await data.json();

    if (data.status !== 201) {
      fail(
        "Une erreur s'est produite lors de la création de la classe. Veuillez réessayez ultérieurement."
      );
      setErrors({ [jsonData.errors.property]: jsonData.errors.message });
    } else {
      roleById[user.role] === role.ADMIN
        ? success("La création de la classe est validé.")
        : warning(
            "La création de la classe est en attente de validation par l'administration."
          );
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
