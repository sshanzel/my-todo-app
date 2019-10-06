import React from "react";
import clx from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal({ children }) {
  const classes = useStyles();

  return (
    <div className={clx(classes.paper, "full-width")}>
      <h2 className="simple-modal-title">Text in a modal</h2>
      <p className="simple-modal-description"></p>
      {children}
    </div>
  );
}
