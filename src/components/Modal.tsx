import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export interface SimpleModalProps {
  open: boolean;
  error?: string;
  children?: React.ReactNode | React.ReactNode[];
  onClose: () => void;
}

const SimpleModal: React.FC<SimpleModalProps> = ({error, onClose, open, children}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={open}
      onClose={onClose}
    >
      <div style={modalStyle} className={classes.paper}>
        {!error ? null : <div className='full-width alert alert-danger'>{error}</div>}

        {children}
      </div>
    </Modal>
  );
};

export default React.memo(SimpleModal);
