import React from "react";
import { Alert } from "@material-ui/lab";
import { useGlobalContext } from "../utils/context";
const AlertCom = () => {
  const { state } = useGlobalContext();
  const { alertCom } = state;

  return (
    <div className="fixed top-28 z-10 right-0">
      <Alert variant="filled" severity={`${alertCom.alertType}`}>
        {alertCom.alrtMsg}
      </Alert>
    </div>
  );
};

export default AlertCom;
