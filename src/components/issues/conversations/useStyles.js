import { makeStyles } from "@material-ui/core/styles";

import { deepPurple } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
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
    flexDirection: "row-reverse",
    alignItems: "center"
  },
  bubbleOther: {
    fontSize: 14,
    display: "flex",
    alignItems: "center"
  },
  mineAvatar: {
    margin: 12,
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  avatar: {
    margin: 12
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
}));
