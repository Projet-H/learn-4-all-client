import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import { SessionContext } from "../../context/session";
import { isEmpty } from "../../helpers/utility";

export const Conversation = () => {
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const { socket } = useContext(SessionContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isEmpty(socket)) {
      socket.emit("get-conversation", {
        id: endpoint
      });
      socket.on("get-conversation-response", param => setData(param));
    }
  }, [endpoint, socket]);

  return data ? <div>ok</div> : <div>nok</div>;
};
