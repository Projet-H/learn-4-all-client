import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  class: {
    position: "relative",
    width: "100%",
    maxWidth: 1220,
    padding: 15
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase"
  },
  addButton: {
    position: "absolute",
    top: "15px",
    right: "15px"
  },
  blocNoData: {
    display: "flex",
    justifyContent: "center",
    marginTop: 125
  },
  noData: {
    width: "100%",
    maxWidth: 600
  },
  element: {
    position: "relative",
    zIndex: "1",
    backgroundColor: "#FFF",
    display: "flex",
    borderRadius: 4,
    border: "solid 1px #bfbfbfb3",
    padding: 18,
    marginBottom: 5,
    cursor: "pointer"
  },
  description: {
    position: "relative",
    zIndex: "2",
    backgroundColor: "#FFF",
    borderRadius: 4,
    border: "solid 1px #bfbfbfb3",
    borderTop: "none",
    padding: 30,
    marginTop: "-20px",
    marginBottom: 25,
    "& > p": {
      fontWeight: "600"
    }
  },
  issueIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  issueTitle: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "column"
  },
  issueSubtitle: {
    color: "#a2a2a2",
    fontSize: 12
  },
  expand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  }
});