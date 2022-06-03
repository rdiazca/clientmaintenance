import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { useDispatch } from "react-redux";
import { displayList, displayWelcome } from "../actions/displayAction";

function Menu() {
  const dispatch = useDispatch();
  const displayListAction = () => dispatch(displayList());
  const displayWelcomeAction = () => dispatch(displayWelcome());

  const showListClient = () => {
    displayListAction();
  };

  const showWelcome = () => {
    displayWelcomeAction();
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={showWelcome}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>
      <ListItemButton onClick={showListClient}>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Consulta clientes" />
      </ListItemButton>
    </React.Fragment>
  );
}

export default Menu;
