import React, { useContext } from "react";
import { List, makeStyles, Typography, Divider } from "@material-ui/core";
import {
  Apps as AppsIcon,
  School as SchoolIcon,
  Create as CreateIcon,
  SelectAll as SelectAllIcon,
  Gavel as GavelIcon,
  BorderClear as BorderClearIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  CLASS,
  CLASSNEW,
  PROFIL,
  HOME,
  VALIDATECLASS,
  VALIDATESUBJECT
} from "../../helpers/route-constant";
import { Links } from "../common/Links";
import { SideListProfile } from "./SideListProfile";
import { SessionContext } from "../../context/session";
import { Can } from "../../helpers/Can";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    flexGrow: 1
  },
  title: {
    padding: "20px",
    [theme.breakpoints.down("sm")]: { display: "none" }
  },
  link: {
    color: "inherit",
    textDecoration: "inherit"
  }
}));

export const SideList = () => {
  const classes = useStyles();
  const { user } = useContext(SessionContext);

  return (
    <>
      <div className={classes.title}>
        <Typography variant="h6" noWrap>
          <Link to={HOME} className={classes.link}>
            Lean4all
          </Link>
        </Typography>
      </div>
      <Divider />
      <List className={classes.list}>
        <Links route={HOME} text="Accueil" Icon={AppsIcon}></Links>
        <Can I="view" a="Class">
          {() => (
            <Links
              route={CLASS}
              text="Voir les classes"
              Icon={SchoolIcon}
            ></Links>
          )}
        </Can>
        <Can I="add" a="Class">
          {() => (
            <Links
              route={CLASSNEW}
              text="Créer une classe"
              Icon={CreateIcon}
            ></Links>
          )}
        </Can>
        <Can I="view" a="Profil">
          {() => (
            <Links
              route={PROFIL}
              text="Choix du rôle"
              Icon={SelectAllIcon}
            ></Links>
          )}
        </Can>
        <Can I="validate" a="Degree">
          {() => (
            <Links
              route={VALIDATECLASS}
              text="Gérer les classes"
              Icon={GavelIcon}
            ></Links>
          )}
        </Can>
        <Can I="validate" a="Subject">
          {() => (
            <Links
              route={VALIDATESUBJECT}
              text="Gérer les matières"
              Icon={BorderClearIcon}
            ></Links>
          )}
        </Can>
      </List>
      <SideListProfile user={user} />
    </>
  );
};
