import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import img404 from "../assets/images/404.svg";
import { HOME } from "../helpers/route-constant";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    padding: 20,
  },
  img: {
    maxWidth: 750,
    width: "100%",
  },
  back: {
    marginTop: 125,
  },
  link: {
    color: "#3f51b5",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const NotFound = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <div className={classes.root}>
      <img className={classes.img} src={img404} alt="404" />
      <p className={classes.back}>
        Accueil :{" "}
        <span className={classes.link} onClick={() => push(HOME)}>
          HOMEPAGE
        </span>
      </p>
    </div>
  );
};
