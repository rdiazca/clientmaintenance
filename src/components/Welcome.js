import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function Welcome() {
    const { username } = useSelector((state) => state.user.user);

  return (
    <Fragment>
      <Typography
        component="h1"
        variant="h2"
        color="inherit"
        noWrap
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Bienvenido  {""}    {username}
      </Typography>
    </Fragment>
  );
}

export default Welcome;
