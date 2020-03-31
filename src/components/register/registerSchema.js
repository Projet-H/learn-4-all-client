import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Votre email est invalide.")
    .max(100, "Votre email ne peut pas avoir plus de 100 caractères.")
    .required("L'email est obligatoire."),
  username: Yup.string()
    .trim()
    .required("Le nom d'utilisateur est obligatoire.")
    .min(5, "Votre nom d'utilisateur doit comporter minimum 5 caractères.")
    .max(50, "Votre nom d'utilisateur doit comporter maximum 50 caractères."),
  lastname: Yup.string()
    .trim()
    .required("Le nom est obligatoire.")
    .min(3, "Votre nom doit comporter minimum 3 caractères.")
    .max(50, "Votre nom doit comporter maximum 50 caractères."),
  firstname: Yup.string()
    .trim()
    .required("Le prénom est obligatoire.")
    .min(3, "Votre prénom doit comporter minimum 3 caractères.")
    .max(50, "Votre prénom doit comporter maximum 50 caractères."),
  password: Yup.string()
    .trim()
    .required("Le mot de passe est obligatoire.")
    .min(8, "Votre mot de passe doit contenir au minimum 8 caractères.")
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins 1 chiffre.")
    .matches(
      /[a-z]/,
      "Le mot de passe doit contenir au minimum 1 lettre minuscule."
    )
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au minimum 1 lettre majuscule."
    ),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre.")
    .required("Le mot de passe de confirmation est obligatoire.")
});
