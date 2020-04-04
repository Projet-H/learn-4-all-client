import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as Cookies from "js-cookie";

import { SessionContext } from "../context/session";
import { LOGIN, HOME } from "../helpers/route-constant";
import { SideList } from "./sidelist/SideList";
import { Auth } from "../services/auth";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#2196f3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#FFF",
    cursor: "pointer",
  },
  drawer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const { setSession, setUser } = useContext(SessionContext);
  const { push } = useHistory();
  const [drawer, setDrawer] = useState({ open: false });

  const handleLogout = async () => {
    await Auth.logout();

    Cookies.remove("session");
    setSession({ auth: false, token: "" });
    setUser({});

    return push(LOGIN);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawer({ ...drawer, open });
  };

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => push(HOME)}
          >
            Learn 4 all
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Se déconnecter
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer.open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className={classes.drawer}
        >
          <SideList />
        </div>
      </Drawer>
    </>
  );
};
