import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  login: Yup.string().required("Le login est obligatoire."),
  password: Yup.string().required("Le mot de passe est obligatoire.")
});
