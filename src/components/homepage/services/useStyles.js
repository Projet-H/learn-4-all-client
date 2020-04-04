import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    padding: "70px 25px 0 25px",
    backgroundColor: "#FFF",
  },
  mainTitle: {
    color: "#333366",
    letterSpacing: "-0.5px",
    fontSize: 30,
    paddingBottom: 8,
  },
  separator: {
    width: 75,
    margin: "0 auto",
  },
  stepOne: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  stepTwo: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  stepThree: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  step: {
    width: 1000,
    paddingTop: 70,
    paddingBottom: 70,
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&  > img": {
      width: "85%",
      maxHeight: 350,
    },
  },
  explanation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    maxWidth: 400,
    padding: 20,
  },
  title: {
    fontSize: 23,
    color: "#444444",
    letterSpacing: "0.5px",
  },
  subtitle: {
    color: "#6d6e71",
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 1.9,
  },
  num: {
    borderRadius: "50%",
    padding: "8px 14px",
    color: "#fff",
    fontSize: 20,
    backgroundColor: "#2196f3",
    backgroundImage: "linear-gradient( -45deg, #005eff, #2196f3 )",
  },
});

export default useStyles;
