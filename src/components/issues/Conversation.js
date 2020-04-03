import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { SessionContext } from "../../context/session";
import { isEmpty } from "../../helpers/utility";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
    maxHeight: "calc(100vh - 68px)",
    minHeight: "calc(100vh - 68px)",
    flexDirection: "column",
    backgroundColor: "#FFF"
  },
  interface: {
    flexGrow: 1,
    padding: "10px 10px 0 10px",
    overflow: "auto"
  },
  send: {
    display: "flex",
    padding: 15,
    alignItems: "center"
  },
  bubbleMine: {
    fontSize: 14,
    display: "flex",
    justifyContent: "flex-end"
  },
  bubbleOther: {
    fontSize: 14,
    display: "flex"
  },
  mine: {
    backgroundColor: "#007aff",
    color: "#FFF",
    margin: "10px 0 10px 0",
    borderRadius: 20,
    padding: "10px 15px",
    maxWidth: "75%"
  },
  other: {
    backgroundColor: "#f4f4f8",
    color: "#000",
    margin: "10px 0 10px 0",
    borderRadius: 20,
    padding: "10px 15px",
    maxWidth: "75%"
  }
});

export const Conversation = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const { socket, user } = useContext(SessionContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.emit("get-conversation", {
        id: endpoint
      });
      socket.on("get-conversation-response", param => setData(param));
    }
  }, [endpoint, socket]);

  return data ? (
    <div className={classes.root}>
      <div className={classes.interface}>
        {data.map(value => (
          <div
            key={value.id}
            className={
              user.id === value.user.id
                ? classes.bubbleMine
                : classes.bubbleOther
            }
          >
            <div
              className={
                user.id === value.user.id ? classes.mine : classes.other
              }
            >
              {value.content}
              {value.content}
            </div>
          </div>
        ))}
      </div>
      <div className={classes.send}>Ecrire le message à envoyer</div>
    </div>
  ) : (
    <div>nok</div>
  );
};
