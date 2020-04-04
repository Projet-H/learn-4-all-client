import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    backgroundColor: "#2196f3",
    color: "#FFF",
  },
  text: {
    width: "100%",
    maxWidth: 750,
    textAlign: "center",
    fontWeight: "500",
  },
});

export const Information = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.text}>
        <i className="fa fa-quote-left" aria-hidden="true"></i> Suite au
        confinement imposé par le gouvernement dû à la propagation du Covid-19,
        nous avons mis à votre disposition une application venant en aide aux
        étudiants préparant un examen en fin d'année. Nous comptons sur le
        bénévolat d'intervenant afin de les aider du mieux possible...{" "}
        <i className="fa fa-quote-right" aria-hidden="true"></i>
      </p>
    </div>
  );
};
