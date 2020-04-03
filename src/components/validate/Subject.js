import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import { MTable } from "../common/MTable";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto"
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase"
  }
});

export const Subject = () => {
  const classes = useStyles();
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);

  const optionTable = {
    columns: [
      { title: "Titre", field: "name" },
      { title: "Prénom", field: "firstName" },
      { title: "Nom", field: "lastName" }
    ],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false
    }
  };

  useEffect(() => {
    const fetchData = () => {
      setTotalCount(0);
      setData([]);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.subtitle}>Sous-Catégorie</h2>
        <h1 className={classes.title}>Gestion des matières</h1>
      </div>
      <div className={classes.table}>
        <MTable
          optionTable={optionTable}
          data={data}
          totalCount={totalCount}
        ></MTable>
      </div>
    </div>
  );
};
