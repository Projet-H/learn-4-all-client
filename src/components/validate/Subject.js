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
      { title: "Slug", field: "slug" },
      { title: "Date de création", field: "createDateTime" }
    ],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false,
      actionsColumnIndex: -1
    }
  };

  const validate = rowData => {
    console.log("You are acceptings " + rowData.id);
  };

  const deny = rowData => {
    console.log("You are refusing " + rowData.id);
  };

  useEffect(() => {
    const fetchData = () => {
      setTotalCount(3);
      setData([
        {
          id: 6,
          name: "ezrferferferf",
          slug: "ezrferferferf",
          createDateTime: "2020-04-02 23:59:11.485706+00"
        },
        {
          id: 3,
          name: "Bac S",
          slug: "Bac S",
          createDateTime: "2020-04-02 18:03:52.927448+00"
        },
        {
          id: 8,
          name: "azerazerzearaze",
          slug: "azerazerzearaze",
          createDateTime: "2020-04-03 03:04:45.471598+00"
        }
      ]);
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
          actions={[
            {
              icon: "check",
              tooltip: "Accepter la création de la classe",
              onClick: (event, rowData) => validate(rowData)
            },
            {
              icon: "delete",
              tooltip: "Refuser la création de la classe",
              onClick: (event, rowData) => deny(rowData)
            }
          ]}
        ></MTable>
      </div>
    </div>
  );
};
