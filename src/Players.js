import React from 'react';
import './cssComponents/player.css';
import PlayerList from './playerComponents/PlayerList';

function App() {
  return (
    <div className='player-app'>
      <PlayerList />
    </div>
  );
}

export default App;