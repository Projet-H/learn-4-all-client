import React from "react";
import { Formik } from "formik";

import { initialValues, RegisterForm } from "./RegisterForm";
import { registerSchema } from "./registerSchema";
import toast from "../common/Toast";
import { Auth } from "../../services/auth";

export const Register = () => {
  const handleSubmit = async (
    { email, username, firstname, lastname, password },
    { setSubmitting, setFieldError }
  ) => {
    try {
      const data = await Auth.register(
        email,
        username,
        firstname,
        lastname,
        password
      );
      const jsonData = await data.json();

      if (data.status !== 201) throw jsonData;

      toast.success(`Merci pour votre inscription !`);
    } catch (error) {
      console.log(error);
      console.log({ setSubmitting, setFieldError });
    }
  };

  return (
    <div>
      <Formik
        initialErrors={initialValues}
        initialValues={initialValues}
        component={RegisterForm}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      ></Formik>
    </div>
  );
};
