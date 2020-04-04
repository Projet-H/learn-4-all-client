import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: "#000",
    textDecoration: "none",
  },
  listItem: {
    height: 65,
  },
  activated: {
    borderRight: "solid 3px #2196f3",
    height: 65,
  },
});

export const Links = ({ route, text, Icon }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  return (
    <NavLink
      className={classes.link}
      to={route}
      isActive={(match) => {
        if (match) {
          if ((match.url === "" || match.url === "/") && !match.isExact) {
            setSelected(false);
            return false;
          }
          if (match.isExact) {
            return setSelected(true);
          }
        }
        setSelected(false);
        return false;
      }}
    >
      <ListItem
        selected={selected}
        className={selected ? classes.activated : classes.listItem}
        button
        key={route}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text}></ListItemText>
      </ListItem>
    </NavLink>
  );
};
