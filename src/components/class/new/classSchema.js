import * as Yup from "yup";

export const classSchema = Yup.object().shape({
  name: Yup.string()
    .max(
      150,
      "Le nom de la classe ne doit pas contenir plus de 150 caractères."
    )
    .required("Le nom de la classe est obligatoire."),
});
