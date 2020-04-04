import { makeStyles } from "@material-ui/core";

import landingWallpaper from "../../assets/images/home.jpg";

export const useStyles = makeStyles({
  rootAuth: {
    marginTop: "-64px",
  },
  heroImage: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${landingWallpaper})`,
  },
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0, 0.9)",
    padding: 25,
  },
  title: {
    fontSize: 55,
    textAlign: "center",
    color: "#fff",
    margin: "0",
    paddingBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    color: "#fff",
    margin: "0",
    lineHeight: "inherit",
  },
  button: {
    display: "flex",
    marginTop: 75,
    justifyContent: "space-between",
    width: 275,
  },
});
