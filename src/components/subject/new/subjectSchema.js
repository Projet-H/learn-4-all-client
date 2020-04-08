import * as Yup from "yup";

export const subjectSchema = Yup.object().shape({
  name: Yup.string()
    .max(
      150,
      "Le nom de la matière ne doit pas contenir plus de 150 caractères."
    )
    .required("Le nom de la classe est obligatoire."),
});
