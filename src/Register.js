import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./cssComponents/register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [myJSON, formDataState] = useState('');

  const onSubmit = (data) => {
    const myJSON = JSON.stringify(data);
    localStorage.setItem("formdataJSON", myJSON);
    //alert(myJSON);
  }; // your form submit function which will invoke after successful validation

  const remove = () => {
    localStorage.removeItem("formdataJSON");
  }

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  let text = localStorage.getItem("testJSON");
  let obj = JSON.parse(text);
  //document.getElementById("dataDemo").innerHTML = obj.firstName;
      

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name</label>
      <input {...register("fullName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.fullName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>
      <input {...register("age", { min: 18, max: 99, pattern: /^[0-9\b]+$/i })} />
      {errors?.age?.type === "pattern" && <p>Numeric value only</p>}
      {errors.age && (
        <p>You Must be older then 12 and younger then 99 years old</p>
      )}
      <label>Player Name</label>
      <input
        {...register("playerName", {
          required: true,
          maxLength: 10,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.playerName?.type === "required" && <p>This field is required</p>}
      {errors?.playerName?.type === "maxLength" && (
        <p>Player name cannot exceed 20 characters</p>
      )}
      {errors?.playerName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <input type="submit" />
    </form>
  );
}
