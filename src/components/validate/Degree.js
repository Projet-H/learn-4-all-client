import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { MTable } from "../common/MTable";
import { Class } from "../../services/class";
import { success, fail } from "../common/Toast";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0,
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase",
  },
});

export const Degree = () => {
  const classes = useStyles();
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);
  const { push } = useHistory();

  const optionTable = {
    columns: [
      { title: "Titre", field: "name" },
      { title: "Slug", field: "slug" },
      { title: "Date de création", field: "createDateTime" },
    ],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false,
      actionsColumnIndex: -1,
    },
  };

  const active = async (rowData) => {
    const data = await Class.active(rowData.id);
    const jsonData = await data.json();
    if (data.status !== 200) {
      fail("La classe n'a pas été validé; Veuillez réessayer ultérieurement.");
      console.log("error", jsonData);
    } else {
      success("La classe a été validé.");
      push("class");
    }
  };

  const remove = async (rowData) => {
    const data = await Class.remove(rowData.id);
    const jsonData = await data.json();
    if (data.status !== 200) {
      fail(
        "La classe n'a pas été supprimé; Veuillez réessayer ultérieurement."
      );
      console.log("error", jsonData);
    } else {
      success("La classe a été refusé.");
      push("class");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Class.listInactive();
      const jsonData = await data.json();

      setTotalCount(jsonData.length);
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.subtitle}>Catégorie</h2>
        <h1 className={classes.title}>
          Gestion des classes en cours de traitement
        </h1>
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
              onClick: (event, rowData) => active(rowData),
            },
            {
              icon: "delete",
              tooltip: "Refuser la création de la classe",
              onClick: (event, rowData) => remove(rowData),
            },
          ]}
        ></MTable>
      </div>
    </div>
  );
};
