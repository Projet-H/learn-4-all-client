import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as Cookies from "js-cookie";

import { SessionContext } from "../context/session";
import { LOGIN, CLASS } from "../helpers/route-constant";
import { Auth } from "../services/auth";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#FFF",
    cursor: "pointer"
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const { setSession, setUser } = useContext(SessionContext);
  const { push } = useHistory();

  const handleLogout = async () => {
    await Auth.logout();

    Cookies.remove("session");
    setSession({ auth: false, token: "" });
    setUser({});

    return push(LOGIN);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => push(CLASS)}
          >
            Learn 4 all
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Se déconnecter
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
