import { Button, Menu, MenuItem } from "@material-ui/core";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import { generatePath, NavLink, useHistory } from "react-router-dom";


export default function MenuApp(){
    
return (<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Menu
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close} ><NavLink to={generatePath("/list")}>List GitHub</NavLink></MenuItem>
        <MenuItem onClick={popupState.close} ><NavLink to={generatePath("/")}>Logout</NavLink></MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>)
}