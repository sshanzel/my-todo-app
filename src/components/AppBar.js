import React from "react";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { IconButton } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clx from "classnames";

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
  },
  socialMediaIcons: {
    color: "white",
    fontSize: "2em",
    margin: 5
  },
  vAlign: {
    verticalAlign: "middle",
    display: "inline"
  }
}));

export default function TodoAppBar({ user, onLogout }) {
  const classes = useStyles();

  const socialMediaIcons = [
    {
      url: "https://github.com/sshanzel",
      icon: "fa-github"
    },
    {
      url: "https://www.linkedin.com/in/lee-hansel-solevilla-776538122/",
      icon: "fa-linkedin"
    },
    {
      url: "https://www.facebook.com/sshanzel",
      icon: "fa-facebook"
    },
    {
      url: "https://twitter.com/sshanzel",
      icon: "fa-twitter"
    },
    {
      url: "https://www.instagram.com/sshanzel",
      icon: "fa-instagram"
    }
  ];

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
              {socialMediaIcons.map(({ url, icon }, index) => (
                <a href={url} key={index} target="blank">
                  <i className={clx(`fab`, icon, classes.socialMediaIcons)}></i>
                </a>
              ))}
              {!user.token ? null : (
                <ExitToAppIcon
                  onClick={onLogout}
                  style={{
                    fontSize: "2.2em",
                    marginTop: -15,
                    marginLeft: 50,
                    cursor: "pointer"
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
