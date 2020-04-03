import { makeStyles } from "@material-ui/core/styles";

import image from "../../assets/images/login.png";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  grid: {
    display: "flex"
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 959px)": {
      display: "none"
    }
  },
  backgroundTitle: {
    height: "100vh",
    backgroundColor: "#000000b8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    color: "#FFF",
    fontSize: 50,
    letterSpacing: 3,
    textTransform: "uppercase",
    margin: 5
  },
  paper: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15
  },
  slash: {
    color: "#3f51b5",
    fontSize: 35,
    paddingRight: 5
  },
  typography: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    textTransform: "uppercase",
    paddingTop: 5,
    fontSize: "1.5rem",
    fontWeight: 700
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  container: {
    paddingTop: 15
  },
  iconSchool: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: "-10px"
  },
  field: {
    width: "100%"
  },
  formSelect: {
    "& > div": {
      padding: 10
    }
  },
  formLabel: {
    marginTop: "-8px"
  },
  submit: {
    padding: 14,
    margin: "16px 0 16px 0"
  },
  errorLevel: {
    textAlign: "center",
    color: "red"
  }
}));
