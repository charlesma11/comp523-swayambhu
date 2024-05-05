import React, { useState, useRef } from 'react';
import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Typography } from '@mui/material';
import Tutorial from './components/Tutorial.js';
import Bar from './components/Bar.js';
import AnnotationList from './components/AnnotationList';
import Twodmap from './components/Twodmap.js';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils/index.js';


function App() {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: 'build/webIntegration.loader.js',
    dataUrl: 'build/webIntegration.data',
    frameworkUrl: 'build/webIntegration.framework.js',
    codeUrl: 'build/webIntegration.wasm',
  });

  const handleShowLocation = (num) => {
    console.log(num);
    sendMessage('SceneController', 'Teleport', num);
  };

  const [tutorialIsOpen, setTutorialIsOpen] = useState(true);
  const [listOpen, setListOpen] = useState(false);
  const unityRef = useRef(null);
  const [mapIsOpen, setMapIsOpen] = useState(false);

  const openTutorial = () => {
    setTutorialIsOpen(true);
  };

  const closeTutorial = () => {
    setTutorialIsOpen(false);
  };

  const menuClick = () => {
    setListOpen(!listOpen);
  };

  const openMap = () => {
    setMapIsOpen(true);
  }

  const closeMap = () => {
    setMapIsOpen(false);
  }

  document.addEventListener('pointerlockerror', (event) => {
    console.log('error locking pointer');
  });

  return (
    <div>
      <Bar
        openHelp={openTutorial}
        menuClick={menuClick}
        menuOpened={listOpen}
        openMap={openMap}
      />
      <Tutorial open={tutorialIsOpen} onClose={closeTutorial} />
      <Twodmap open={mapIsOpen} onClose={closeMap} handleShowLocation={handleShowLocation}/>
      <AnnotationList open={listOpen} handleShowLocation={handleShowLocation} />
      <Typography
        variant="h6"
        style={{ position: 'absolute', left: 0, bottom: 0 }}
        color="white"
        mx={2}
        my={2}
      >
        Press 'ESC' twice to free cursor.
      </Typography>
      <div ref={unityRef}>
        <Unity
          unityProvider={unityProvider}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
}

export default App;
