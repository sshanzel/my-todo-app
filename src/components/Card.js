import React from "react";
import clx from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: 280,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal({ children }) {
  const classes = useStyles();

  return <div className={clx(classes.paper, "full-width")}>{children}</div>;
}
