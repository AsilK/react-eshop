import React from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import './default.scss';

function App() {
  return (
    <div className="App">
      <div className="main">
      <Header/>
      <Homepage/>
      </div>
    </div>
  );
}
export default App;