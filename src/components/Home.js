import React from "react";
import { makeStyles } from "@material-ui/core";

import homePicture from "../assets/images/home.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  }
});

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={homePicture} alt="work in progress" />
    </div>
  );
};
