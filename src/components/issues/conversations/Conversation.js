import React, { useEffect, useContext, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { Formik } from "formik";

import { SessionContext } from "../../../context/session";
import { initialValues, ConversationForm } from "./ConversationForm";
import { useStyles } from "./useStyles";
import { NOTFOUND } from "../../../helpers/route-constant";
import { isEmpty } from "../../../helpers/utility";

export const Conversation = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const { socket, user } = useContext(SessionContext);
  const [data, setData] = useState([]);
  const { push } = useHistory();

  const handleSubmit = ({ message }, { resetForm }) => {
    socket.emit("send-message", {
      content: message,
      conversationId: parseInt(endpoint),
    });
    resetForm({});
  };

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.emit("join-conversation", {
        conversationId: parseInt(endpoint),
      });
      socket.emit("get-conversation", {
        conversationId: parseInt(endpoint),
      });
      socket.on("not-authorized", () => {
        push(NOTFOUND);
      });
    }
  }, [endpoint, push, socket]);

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.on("get-conversation-response", (param) => setData(param));
      socket.on("sent-message", (param) => {
        setData([...data, param]);
        const scrollDiv = document.getElementById("conversation");
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
      });
    }
  }, [data, socket]);

  return data ? (
    <div className={classes.root}>
      <div className={classes.interface} id="conversation">
        {data.map((value) => (
          <div
            key={value.id}
            className={
              user.id === value.user.id
                ? classes.bubbleMine
                : classes.bubbleOther
            }
          >
            <Avatar
              className={
                user.id === value.user.id ? classes.mineAvatar : classes.avatar
              }
            >
              {value.user.firstName.charAt(0)}
            </Avatar>
            <div
              className={
                user.id === value.user.id ? classes.mine : classes.other
              }
            >
              {value.content}
            </div>
          </div>
        ))}
      </div>
      <div className={classes.send}>
        <Formik
          initialErrors={initialValues}
          initialValues={initialValues}
          component={ConversationForm}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        ></Formik>
      </div>
    </div>
  ) : (
    ""
  );
};
