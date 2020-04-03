import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import { makeStyles, Grid, Button, Icon } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    boxShadow: "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)",
    backgroundColor: "#FFF",
    borderRadius: 4,
    marginBottom: 16
  },
  element: {
    padding: 8
  },
  mainTitle: {
    color: "#263238",
    fontSize: 17,
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.05px"
  },
  title: {
    color: "#263238",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.05px"
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "-0.04px"
  }
});

export const Card = ({ value, mainSubtitle, route }) => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Grid container className={classes.list}>
      <Grid item xs={6} sm={4} className={classes.element}>
        <div className={classes.mainTitle}>{value.name}</div>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.element}>
        <div className={classes.title}>54</div>
        <div className={classes.subtitle}>{mainSubtitle}</div>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.element}>
        <div className={classes.title}>
          <Moment format="DD/MM/YYYY">{value.createDateTime}</Moment>
        </div>
        <div className={classes.subtitle}>Date de création</div>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.element}>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<Icon>send</Icon>}
          onClick={() => push(route)}
        >
          Accéder
        </Button>
      </Grid>
    </Grid>
  );
};
