import React, { useState } from 'react';
import './App.css';
import firebase from 'firebase';

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyBLCa70vW-59NMffi5cjJveERCJw_cHwzk',
    authDomain: 'audiotesting-ac501.firebaseapp.com',
    projectId: 'audiotesting-ac501',
    storageBucket: 'audiotesting-ac501.appspot.com',
    messagingSenderId: '408893517975',
    appId: '1:408893517975:web:2d82db8544a798091439d2',
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const [audioPath, setAudioPath] = useState(null);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = firebase.storage();
  const songRef = storage.ref('buffalo-solder.mp3');
  songRef.getDownloadURL().then((url) => {
    setAudioPath(url);
  });

  return (
    <div className='App'>
      <h1 className='title'>Sample Firebase App</h1>
      {audioPath && <audio src={audioPath} controls></audio>}
    </div>
  );
}

export default App;
