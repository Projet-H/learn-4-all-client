import * as Yup from "yup";

export const issuesSchema = Yup.object().shape({
  title: Yup.string()
    .max(
      150,
      "Le titre du problème ne doit pas contenir plus de 150 caractères."
    )
    .required("Le titre du problème est obligatoire."),
  description: Yup.string()
    .max(
      150,
      "La description du problème ne doit pas contenir plus de 1000 caractères."
    )
    .required("La description du problème est obligatoire."),
});
