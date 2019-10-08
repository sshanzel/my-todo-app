import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: 280,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    wordWrap: "break-word"
  }
}));

export const SimpleCard = ({ children, title, description, styles }) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <h2 className={styles.header}>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default SimpleCard;
