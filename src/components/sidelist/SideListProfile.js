import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: { marginBottom: 15 },
  title: {
    fontSize: 20,
    color: "rgba(0,0,0,.87)",
    fontWeight: "500",
    padding: 0,
    margin: 0,
  },
  subtitle: {
    color: "rgba(0,0,0,.6)",
    fontSize: 14,
    fontWeight: "400",
    padding: 0,
    margin: 0,
  },
  buttonEditAccount: {
    border: "solid 1px #3f51b5",
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: 8,
    fontSize: 10,
    marginTop: 15,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.0)",
      color: "#3f51b5",
    },
  },
}));

export const SideListProfile = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Avatar className={classes.avatar} src="/" />
      <h3 className={classes.title}>{user.firstName + " " + user.lastName}</h3>
      <h6 className={classes.subtitle}>{user.email}</h6>
    </div>
  );
};
