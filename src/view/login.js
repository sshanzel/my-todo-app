import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        The Solevilla
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn({ onLogin, onRegister, error }) {
  const classes = useStyles();
  const [processing, setProcessing] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    name: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { username, password } = credentials;
    const command = registration
      ? onRegister
      : () => onLogin({ username, password });
    setProcessing(true);
    const error = await command(credentials);
    if (error) setProcessing(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          The Solevilla Pet Projects
        </Typography>
        <br />
        {!error ? null : (
          <div className="alert alert-danger" style={{ width: "100%" }}>
            {error}
          </div>
        )}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={credentials.username}
            onChange={e =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={credentials.password}
            onChange={e =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            autoComplete="current-password"
          />
          {!registration ? (
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Display Name"
              type="name"
              id="name"
              value={credentials.name}
              onChange={e =>
                setCredentials({ ...credentials, name: e.target.value })
              }
              autoComplete="current-name"
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={processing}
            onClick={handleSubmit}
            className={classes.submit}
          >
            {!registration ? `Sign In` : `Register`}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Test Link {/* Forgot Password */}
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => setRegistration(!registration)}
              >
                {!registration
                  ? "Don't have an account? Sign Up"
                  : "Already Registered? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
