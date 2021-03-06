import { MouseEventHandler, useState } from 'react';

import { useRouter } from 'next/router';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type PopUpProps = {
  messageTitle: string;
  message: string;
  buttonText?: string;
  agreeAction?: MouseEventHandler;
  disagreeAction?: MouseEventHandler;
  agreeButtonText: string;
  disagreeButtonText?: string;
  simple?: boolean;
};

const PopUp = ({
  messageTitle,
  message,
  agreeAction,
  disagreeAction,
  agreeButtonText,
  disagreeButtonText,
  simple,
  buttonText,
}: PopUpProps) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  return (
    <>
      <Dialog
        open={simple ? open : true}
        onClose={() => router.push('/')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{messageTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {disagreeAction && (
            <Button onClick={disagreeAction} color="primary">
              {disagreeButtonText}
            </Button>
          )}
          {simple && (
            <Button onClick={handleClose} color="primary">
              {buttonText}
            </Button>
          )}
          <Button onClick={agreeAction} color="primary" autoFocus>
            {agreeButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUp;
