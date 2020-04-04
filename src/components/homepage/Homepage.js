import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import { SessionContext } from "../../context/session";
import { Services } from "./services/Services";
import { Information } from "./information/Information";
import { LOGIN, REGISTER } from "../../helpers/route-constant";
import { Footer } from "../Footer";
import { useStyles } from "./useStyles";

export const Homepage = () => {
  const classes = useStyles();
  const { session } = useContext(SessionContext);
  const { push } = useHistory();

  return (
    <div className={session.auth ? classes.rootAuth : classes.root}>
      <section className={classes.heroImage}>
        <article className={classes.hero}>
          <h1 className={classes.title}>
            Application d'entraide <br />
            pour <b>la réussite de ses examens</b>
          </h1>
          <h3 className={classes.subtitle}>
            Vous passez un examen en fin d'année et vous rencontrez des
            difficultés ? <br />
            <b>Learn4all</b> est là pour vous aider !
          </h3>
          {!session.auth ? (
            <div className={classes.button}>
              <Button variant="contained" onClick={() => push(REGISTER)}>
                S'inscrire
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => push(LOGIN)}
              >
                Se connecter
              </Button>
            </div>
          ) : (
            ""
          )}
        </article>
      </section>
      <section>
        <Information />
      </section>
      <section>
        <Services />
      </section>
      <Footer />
    </div>
  );
};
