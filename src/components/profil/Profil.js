import React from "react";
import { Grid, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { useStyles } from "./useStyles";
import teacherPicture from "../../assets/images/teacher.svg";
import studentPicture from "../../assets/images/student.svg";
import { roleIdByName } from "../../helpers/constants";

export const Profil = () => {
  const classes = useStyles();

  const handleClick = roleId => {
    console.log(roleId);
  };

  return (
    <>
      <section className={classes.typeSelection}>
        <Grid container className={classes.container}>
          <Grid
            item
            sm={12}
            md={6}
            className={classes.containerWeb}
            onClick={() => handleClick(roleIdByName.TEACHER)}
          >
            <div className={classes.item}>
              <img src={teacherPicture} width="80%" alt="desktop" />
              <div className={classes.blockSubtitleButton}>
                <div className={classes.blockSubtitle}>
                  <p className={classes.subtitle}>Vous êtes un professeur ?</p>
                </div>
                <div className={classes.buttonIcon}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component="button"
                  >
                    <ArrowForwardIcon />
                  </Button>
                </div>
              </div>
              <div>
                <p className={classes.information}>
                  Venez aider de nombreux élèves à obtenir leur diplôme.
                </p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className={classes.containerApp}
            onClick={() => handleClick(roleIdByName.STUDENT)}
          >
            <div className={classes.item}>
              <img src={studentPicture} width="80%" alt="mobile" />
              <div className={classes.blockSubtitleButton}>
                <div className={classes.blockSubtitle}>
                  <p className={classes.subtitle}>Vous êtes un élève ?</p>
                </div>
                <div className={classes.buttonIcon}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component="button"
                  >
                    <ArrowForwardIcon />
                  </Button>
                </div>
              </div>
              <div>
                <p className={classes.information}>
                  Vous passez des examens pour l'obtention d'un diplôme en fin
                  d'année ? De nombreux professeurs vous attendent afin de vous
                  aider.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};
