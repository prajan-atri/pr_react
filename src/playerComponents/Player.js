import React, { useState } from 'react';
import PlayerForm from './PlayerForm';
import { FaEdit, FaWindowClose } from "react-icons/fa";

const Player = ({ players, completePlayer, removePlayer, updatePlayer }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updatePlayer(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <PlayerForm edit={edit} onSubmit={submitUpdate} />;
  }

  return players.map((player, index) => (
    <div
      className={player.isComplete ? 'player-row complete' : 'player-row'}
      key={index}
    >
      <div key={player.id} onClick={() => completePlayer(player.id)}>
        {player.text}
      </div>
      <div className='icons'>
        <FaWindowClose
          onClick={() => removePlayer(player.id)}
          className='delete-icon'
        />
        <FaEdit
          onClick={() => setEdit({ id: player.id, value: player.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Player;