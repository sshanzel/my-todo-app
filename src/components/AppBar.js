import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  exitIcon: {
    color: "white"
  }
}));

export default function TodoAppBar({ user, onLogout }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify={`space-between`} alignItems={`center`}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Sample To-do App
              </Typography>
            </Grid>
            <Grid item>
              {!user.token ? null : (
                <IconButton className={classes.exitIcon} onClick={onLogout}>
                  <ExitToAppIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
