import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import { useUnityContext } from 'react-unity-webgl';
import MapImage from '../2dmap.png'
import Annotation from './Annotation';

export default function Map({ open, onClose, handleShowLocation }) {
  const { sendMessage } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Map'}</DialogTitle>
      <DialogContent id="alert-dialog-description">
        {/* Use the imported image */}
        <img src={MapImage} alt="Map" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <Button
        onClick={() => {
          handleShowLocation(1, sendMessage);
        }}
        >
          Swayambhu Machaitya
        </Button>
        <Button>
          Deva Dharma Mahvaihar
        </Button>
        <Button>
          hariti Maa (Ajimaa) Temple
        </Button>
        <Button>
          Small Chaitya
        </Button>
        <Button>
          Two Chaityas
        </Button>
        <Button>
          Shops and Homes
        </Button>
        <Button>
          Karma Raja Mahavihara
        </Button>
        <Button>
          Pratppura
        </Button>
        <Button>
          Gyanmala Bhajan
        </Button>
        <Button>
          Kathmandu Steps
        </Button>
        <Button>
          Big Vajra
        </Button>
        <Button>
          Annatpura
        </Button>
        <Button>
          Amitabha Buddha
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Close Map
        </Button>
      </DialogActions>
    </Dialog>
  );
}