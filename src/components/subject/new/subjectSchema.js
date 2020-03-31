import * as Yup from "yup";

export const subjectSchema = Yup.object().shape({
  name: Yup.string().required("Le nom de la classe est obligatoire.")
});
