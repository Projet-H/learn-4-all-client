import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";

import { SessionContext } from "../../../context/session";
import { initialValues, ConversationForm } from "./ConversationForm";
import { useStyles } from "./useStyles";
import { isEmpty } from "../../../helpers/utility";
import { Avatar } from "@material-ui/core";

export const Conversation = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const { socket, user } = useContext(SessionContext);
  const [data, setData] = useState([]);

  const handleSubmit = ({ message }, { resetForm }) => {
    socket.emit("send-message", {
      content: message,
      conversationId: endpoint
    });
    resetForm({});
  };

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.emit("join-conversation", {
        conversationId: endpoint
      });
      socket.emit("get-conversation", {
        conversationId: endpoint
      });
    }
  }, [endpoint, socket]);

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.on("get-conversation-response", param => setData(param));
      socket.on("sent-message", param => {
        setData([...data, param]);
        const scrollDiv = document.getElementById("conversation");
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
      });
    }
  }, [data, endpoint, socket]);

  return data ? (
    <div className={classes.root}>
      <div className={classes.interface} id="conversation">
        {data.map(value => (
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
