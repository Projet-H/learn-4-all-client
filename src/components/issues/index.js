import React, { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import {
  BugReport as BugReportIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from "@material-ui/icons";

import noDataPicture from "../../assets/images/no-data.svg";
import { isEmpty } from "../../helpers/utility";
import { SessionContext } from "../../context/session";
import { Can } from "../../helpers/Can";
import { useStyles } from "./useStyles";

export const IssuesIndex = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [open, setOpen] = useState({});
  const { pathname } = useLocation();
  const degree = pathname.split("/")[1];
  const subject = pathname.split("/")[2];
  const { push } = useHistory();
  const { socket, user } = useContext(SessionContext);

  const handleClick = id => {
    parseInt(Object.keys(open)[0]) === id
      ? setOpen({})
      : setOpen({ [id]: true });
  };

  const handleBegin = e => {
    e.stopPropagation();
    console.log("here");

    socket.emit("join-conversation", {
      id: user.id
    });

    socket.on("join-conversation-response", param => console.log(param));
    socket.on("user-joined-conversation", param => console.log(param));
  };

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.emit("get-conversations", {
        degreeSlug: degree,
        subjectSlug: subject
      });
      socket.on("get-conversations-response", param => setData(param));
      socket.on("create-conversation-response", () =>
        console.log("create appli")
      );
    }
  });

  return (
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Élément</h2>
          <h1 className={classes.title}>Liste des problématiques</h1>
        </div>
        <Can I="add" a="Issues">
          {() => (
            <Button
              variant="contained"
              color="primary"
              className={classes.addButton}
              onClick={() => push(`issues/new`)}
            >
              Ajouter
            </Button>
          )}
        </Can>
        {!isEmpty(data) ? (
          <div className={classes.list}>
            {data.map(value => (
              <div key={value.id}>
                <div
                  className={classes.element}
                  onClick={() => handleClick(value.id)}
                >
                  <div className={classes.issueIcon}>
                    <BugReportIcon />
                  </div>
                  <Typography className={classes.issueTitle}>
                    <span>{value.title}</span>
                    <span
                      className={classes.issueSubtitle}
                    >{`Créé par : ${value.student.firstName}`}</span>
                  </Typography>
                  <Can I="join" a="Issues">
                    {() => (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={e => handleBegin(e)}
                      >
                        Démarrer
                      </Button>
                    )}
                  </Can>
                  <div className={classes.expand}>
                    {open[value.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </div>
                </div>
                {open[value.id] ? (
                  <div className={classes.description}>
                    <Typography>{value.description}</Typography>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.blocNoData}>
            <img src={noDataPicture} alt="no data" className={classes.noData} />
          </div>
        )}
      </div>
    </div>
  );
};
