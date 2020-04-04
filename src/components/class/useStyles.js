import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  class: {
    position: "relative",
    width: "100%",
    maxWidth: 1220,
    padding: 15,
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0,
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase",
  },
  addButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
  },
  list: {
    margin: "35px 0 35px 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
  blocNoData: {
    display: "flex",
    justifyContent: "center",
    marginTop: 125,
  },
  noData: {
    width: "100%",
    maxWidth: 600,
  },
});
