import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%"
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function ToDoCard({ todo, onChange, onDelete, onSave }) {
  const classes = useStyles();
  const completed = todo.completed ? "filled" : "outlined";

  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField
          label="Title"
          className={classes.textField}
          value={todo.title || ""}
          onChange={e => onChange(e, "title", todo)}
          variant={completed}
          margin="normal"
        />
        <TextField
          label="Description"
          className={classes.textField}
          value={todo.description || ""}
          onChange={e => onChange(e, "description", todo)}
          rows={5}
          multiline={true}
          variant={completed}
          margin="normal"
        />
        <input
          className="form-control"
          style={{ width: "95%", margin: 7 }}
          type="date"
          value={todo.due || ""}
          onChange={e => onChange(e, "due", todo)}
        />
      </CardContent>
      <CardActions>
        <Fab
          onClick={() => onDelete(todo)}
          aria-label="delete"
          className={classes.fab}
        >
          <DeleteIcon />
        </Fab>
        <Button onClick={() => onSave(todo)} size="small">
          <Fab
            onClick={() => onDelete(todo)}
            aria-label="delete"
            className={classes.fab}
          >
            {todo.id === -1 ? (
              <SaveIcon />
            ) : todo.completed ? (
              <UndoIcon />
            ) : (
              <CheckCircleIcon />
            )}
          </Fab>
        </Button>
      </CardActions>
    </Card>
  );
}
