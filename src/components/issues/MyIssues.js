import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Moment from "react-moment";

import { MTable } from "../common/MTable";
import { Issues } from "../../services/issues";
import { SessionContext } from "../../context/session";
import { isEmpty } from "../../helpers/utility";

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

export const MyIssues = () => {
  const classes = useStyles();
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);
  const { push } = useHistory();
  const { user } = useContext(SessionContext);

  const optionTable = {
    columns: [
      { title: "Titre", field: "title" },
      { title: "Description", field: "description" },
      { title: "Date de création", field: "createdAt" },
    ],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false,
      actionsColumnIndex: -1,
    },
  };

  const view = (data) => {
    push(`/${data.subject.degree.slug}/${data.subject.slug}/issues/${data.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!isEmpty(user)) {
        const data = await Issues.mine(user.id);
        const jsonData = await data.json();

        const jsonDataAddMoment = await Promise.all(
          jsonData.map(async (e) => {
            return {
              ...e,
              createdAt: (
                <Moment format="DD/MM/YYYY">{e.createDateTime}</Moment>
              ),
            };
          })
        );

        setTotalCount(jsonDataAddMoment.length);
        setData(jsonDataAddMoment);
      }
    };
    fetchData();
  }, [user, user.id]);

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
              icon: "search",
              tooltip: "Accéder à la problématique",
              onClick: (event, rowData) => view(rowData),
            },
          ]}
        ></MTable>
      </div>
    </div>
  );
};
