import React, { useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";

import { useStyles } from "./useStyles";
import teacherPicture from "../../assets/images/teacher.svg";
import studentPicture from "../../assets/images/student.svg";
import { roleIdByName } from "../../helpers/constants";
import { SessionContext, setSessionCookie } from "../../context/session";
import { CLASS } from "../../helpers/route-constant";
import { ability, defineRulesFor } from "../../helpers/ability";
import { Me } from "../../services/me";

export const Profil = () => {
  const classes = useStyles();
  const { user, setUser, session, setSession } = useContext(SessionContext);
  const { push } = useHistory();

  const handleClick = async roleId => {
    const data = await Me.edit(user.id, {
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      role: roleId
    });
    const jsonData = await data.json();

    if (data.status !== 200) {
      console.log("error", jsonData);
    } else {
      const currentAuth = { id: user.id, role: roleId };
      ability.update(defineRulesFor(currentAuth));
      setUser({ ...user, role: roleId });

      setSessionCookie(jsonData.accessToken);
      setSession({ ...session, auth: true, token: jsonData.accessToken });
      return push(CLASS);
    }
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
