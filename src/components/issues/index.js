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
  const { socket } = useContext(SessionContext);

  const handleClick = id => {
    parseInt(Object.keys(open)[0]) === id
      ? setOpen({})
      : setOpen({ [id]: true });
  };

  const handleBegin = (e, idConversation) => {
    e.stopPropagation();

    socket.emit("join-conversation", {
      conversationId: idConversation
    });

    push(`issues/${idConversation}`);
  };

  const handleChat = (e, idConversation) => {
    e.stopPropagation();
    push(`issues/${idConversation}`);
  };

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.emit("get-conversations", {
        degreeSlug: degree,
        subjectSlug: subject
      });
      socket.on("get-conversations-response", param => setData(param));
    }
  }, [degree, socket, subject]);

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
                    {() =>
                      value.teacher ? (
                        ""
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={e => handleBegin(e, value.id)}
                        >
                          Prendre en charge
                        </Button>
                      )
                    }
                  </Can>
                  <Can I="tchat" a="Issues">
                    {() =>
                      value.teacher ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={e => handleChat(e, value.id)}
                        >
                          Tchat
                        </Button>
                      ) : (
                        ""
                      )
                    }
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
