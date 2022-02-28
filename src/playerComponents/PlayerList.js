import React, { useState } from 'react';
import PlayerForm from './PlayerForm';
import Player from './Player';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  const addPlayer = player => {
    if (!player.text || /^\s*$/.test(player.text)) {
      return;
    }

    const newPlayers = [player, ...players];

    setPlayers(newPlayers);
    console.log(...players);
  };

  const updatePlayer = (playerId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setPlayers(prev => prev.map(item => (item.id === playerId ? newValue : item)));
  };

  const removePlayer = id => {
    const removedArr = [...players].filter(player => player.id !== id);

    setPlayers(removedArr);
  };

  const completePlayer = id => {
    let updatedPlayers = players.map(player => {
      if (player.id === id) {
        player.isComplete = !player.isComplete;
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  return (
    <>
      <h1>Players</h1>
      <h3>Enter Player Name </h3><br/>
      <PlayerForm onSubmit={addPlayer} />
      <Player
        players={players}
        completePlayer={completePlayer}
        removePlayer={removePlayer}
        updatePlayer={updatePlayer}
      />
    </>
  );
}

export default PlayerList;