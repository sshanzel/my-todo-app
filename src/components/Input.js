import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export const TextInput = ({ value, rows, onChange }) => {
  const classes = useStyles();

  return (
    <TextField
      id="standard-name"
      label="Title"
      rows={rows}
      className={classes.textField}
      value={value || ""}
      onChange={onChange}
      margin="normal"
    />
  );
};

export default TextInput;
