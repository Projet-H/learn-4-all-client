import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("L'email est obligatoire."),
  password: Yup.string().required("Le mot de passe est obligatoire.")
});
