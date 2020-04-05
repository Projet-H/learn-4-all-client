import React, { useContext } from "react";
import { Formik } from "formik";
import { useLocation, useHistory } from "react-router-dom";

import { initialValues, IssuesForm } from "./IssuesForm";
import { issuesSchema } from "./issuesSchema";
import { SessionContext } from "../../../context/session";
import { success, fail } from "../../common/Toast";
import { useStyles } from "./useStyles";

export const IssuesNew = () => {
  const classes = useStyles();
  const { socket } = useContext(SessionContext);
  const { pathname } = useLocation();
  const degree = pathname.split("/")[1];
  const subject = pathname.split("/")[2];
  const { push } = useHistory();

  const handleSubmit = ({ title, description }) => {
    socket.emit("create-conversation", {
      title,
      description,
      subjectSlug: subject,
      degreeSlug: degree,
    });

    socket.on("error-create-conversation", () => {
      fail(
        "Votre problématique n'a pas été créée. Veuillez réessayer ultérieurement."
      );
      push(`/${degree}/${subject}/issues`);
    });
    socket.on("create-conversation-response", () => {
      success("Votre problématique a été créée.");
      push(`/${degree}/${subject}/issues`);
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Problématique</h2>
          <h1 className={classes.title}>Création du problème</h1>
        </div>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          component={IssuesForm}
          validationSchema={issuesSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
    </div>
  );
};
