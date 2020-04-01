import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  typeSelection: {
    display: "flex",
    alignItems: "center",
    height: "calc(100vh - 64px)"
  },
  container: {
    height: "100%",
    cursor: "pointer"
  },
  containerWeb: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 959px)": {
      borderBottom: "1px solid rgba(23,55,83,.2)"
    },
    "@media (min-width: 960px)": {
      borderRight: "1px solid rgba(23,55,83,.2)"
    },
    "&:hover": {
      "& > div": {
        transform: "scale(1.05)"
      }
    }
  },
  containerApp: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 959px)": {
      borderTop: "1px solid rgba(23,55,83,.2)"
    },
    "@media (min-width: 960px)": {
      borderLeft: "1px solid rgba(23,55,83,.2)"
    },
    "&:hover": {
      "& > div": {
        transform: "scale(1.05)"
      }
    }
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 25,
    width: "65%",
    margin: "0 auto",
    transition: "all .25s linear"
  },
  file: {
    width: "80%"
  },
  blockSubtitleButton: {
    display: "inline-flex"
  },
  blockSubtitle: {
    marginRight: 45
  },
  subtitle: {
    fontSize: 24,
    letterSpacing: 0.2,
    fontWeight: 600
  },
  buttonIcon: {
    position: "relative"
  },
  button: {
    position: "absolute",
    borderRadius: "50%",
    minWidth: 1,
    padding: 10,
    top: "50%",
    transform: "translateY(-50%)"
  },
  information: {
    margin: 0,
    fontSize: 14,
    letterSpacing: 0,
    fontWeight: 400,
    color: "#808080"
  }
});
