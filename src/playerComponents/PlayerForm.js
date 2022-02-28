import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function PlayerForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    //e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='player-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
           // {...register("text",{required: true})}
            ref={inputRef}
            className='player-input edit'
          />
          <button onClick={handleSubmit(onSubmit)} className='player-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a player'
            value={input}
            onChange={handleChange}
            name='text'
            //{...register("text")}
            className='player-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit(onSubmit)} className='player-button'>
            Add player
          </button>
        </>
      )}
    </form>
  );
}

export default PlayerForm;