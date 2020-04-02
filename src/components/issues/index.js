import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import noDataPicture from "../../assets/images/no-data.svg";
import { isEmpty } from "../../helpers/utility";
// import { Issues } from "../../services/issues";
import { useStyles } from "./useStyles";

export const IssuesIndex = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const { pathname } = useLocation();
  const degree = pathname.split("/")[1];
  const subject = pathname.split("/")[2];
  const { push } = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Passer le slug de la classe : ${degree}`);
      console.log(`Passer le slug de la matière : ${subject}`);
      // const response = await Issues.list();
      // const dataJson = await response.json();
      return setData({});
    };
    fetchData();
  }, [degree, subject]);

  return (
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Élément</h2>
          <h1 className={classes.title}>Liste des problématiques</h1>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          onClick={() => push(`issues/new`)}
        >
          Ajouter
        </Button>
        {!isEmpty(data) ? (
          <div>RIEN</div>
        ) : (
          <div className={classes.blocNoData}>
            <img src={noDataPicture} alt="no data" className={classes.noData} />
          </div>
        )}
      </div>
    </div>
  );
};
