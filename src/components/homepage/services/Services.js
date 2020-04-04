import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

import useStyles from "./useStyles";
import congratulationImg from "../../../assets/images/congratulation.svg";
import contactImg from "../../../assets/images/contact.svg";
import helpImg from "../../../assets/images/help.svg";

export const Services = () => {
  const classes = useStyles();

  useEffect(() => {
    const init = async () => {
      AOS.init({
        duration: 750,
      });
    };
    init();
  }, []);

  return (
    <>
      <header className={classes.header}>
        <h2 className={classes.mainTitle}>
          Comment l'application fonctionne-t-elle ?
        </h2>
        <hr className={classes.separator}></hr>
      </header>
      <section className={classes.stepOne}>
        <Grid container className={classes.step}>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-right"
            data-aos-delay="200"
            className={classes.img}
          >
            <img src={helpImg} alt="help" />
          </Grid>
          <Grid item xs={12} md={6} className={classes.explanation}>
            <div className={classes.details}>
              <h3 className={classes.title}>
                <span className={classes.num}>1</span> Interrogation
              </h3>
              <p className={classes.subtitle}>
                Je rencontre des <b>difficultés</b> sur une matière et les
                examens approchent, je peux <b>solliciter de l’aide</b> auprès
                de la plateforme .
              </p>
            </div>
          </Grid>
        </Grid>
      </section>
      <section className={classes.stepTwo}>
        <Grid container className={classes.step}>
          <Grid item xs={12} md={6} className={classes.explanation}>
            <div className={classes.details}>
              <h3 className={classes.title}>
                <span className={classes.num}>2</span> Prise de contact
              </h3>
              <p className={classes.subtitle}>
                Un bénévole va se mettre en relation avec moi pour{" "}
                <b>répondre à ma problématique</b> et je pourrais{" "}
                <b>échanger avec lui</b>.
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-left"
            data-aos-delay="200"
            className={classes.img}
          >
            <img src={contactImg} alt="contact" />
          </Grid>
        </Grid>
      </section>
      <section className={classes.stepThree}>
        <Grid container className={classes.step}>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-right"
            data-aos-delay="200"
            className={classes.img}
          >
            <img src={congratulationImg} alt="congratulation" />
          </Grid>
          <Grid item xs={12} md={6} className={classes.explanation}>
            <div className={classes.details}>
              <h3 className={classes.title}>
                <span className={classes.num}>3</span> Résolution
              </h3>
              <p className={classes.subtitle}>
                Ma <b>problématique est résolue</b>, plus d'inquiètude pour la
                réussite de mon examen.
              </p>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};
