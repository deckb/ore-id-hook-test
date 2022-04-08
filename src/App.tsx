import React from 'react';
import './App.css';

function App(props: any) {
  const onAuth = props.webWidget.useActionAuth();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onAuth({
          onError: console.error,
          onSuccess: console.log
        });
      }}
    >
      Login
    </button>
  );
}



export default App;
