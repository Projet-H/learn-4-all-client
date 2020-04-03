import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
    maxHeight: "calc(100vh - 65px)",
    minHeight: "calc(100vh - 65px)",
    flexDirection: "column",
    backgroundColor: "#FFF"
  },
  interface: {
    flexGrow: 1,
    padding: "10px 20px 0 20px",
    overflow: "auto"
  },
  bubbleMine: {
    fontSize: 14,
    display: "flex",
    justifyContent: "flex-end"
  },
  bubbleOther: {
    fontSize: 14,
    display: "flex"
  },
  mine: {
    backgroundColor: "#007aff",
    color: "#FFF",
    margin: "7px 0 7px 0",
    borderRadius: 20,
    padding: "10px 15px",
    maxWidth: "75%"
  },
  other: {
    backgroundColor: "#f4f4f8",
    color: "#000",
    margin: "7px 0 7px 0",
    borderRadius: 20,
    padding: "10px 15px",
    maxWidth: "75%"
  },
  send: {
    display: "flex",
    alignItems: "center"
  },
  form: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  field: {
    flexGrow: 1,
    "& > div": {
      borderRadius: 0
    }
  },
  button: {
    borderRadius: 0
  }
});
