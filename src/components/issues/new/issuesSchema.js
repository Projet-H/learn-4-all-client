import * as Yup from "yup";

export const issuesSchema = Yup.object().shape({
  title: Yup.string().required("Le titre du problème est obligatoire."),
  description: Yup.string().required(
    "La description du problème est obligatoire."
  )
});
