import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import UnhandledError from './components/UnhandledError';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <UnhandledError
          error={Error(
            'Example of how an unhandled error would look if it were to raise itself.'
          )}
          resetErrorBoundary={() => alert('Clicked me ...')}
        ></UnhandledError>
        <div className='App-button'>
          <Button
            label='Test'
            primary={true}
            backgroundColor='gray'
            onClick={() => {
              throw new Error('Test unhandled exceptions');
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
