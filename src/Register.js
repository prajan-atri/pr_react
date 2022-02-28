import React from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "./utils";

function Form({ data, setData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (newData) => setData([...data, newData]);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="full name" {...register("title", {})} />
      <input
        type="text"
        placeholder="player id"
        {...register("description", {})}
      />
      {/*<input type="checkbox" placeholder="done" {...register("done", {})} />*/}

      <input type="submit" />
    </form>
  );
}

export default function FormView() {
  const [data, setData] = useLocalStorage("todo", [
    {
      title: "Task 1",
      description: "This is task 1",
      done: true,
    },
  ]);

  return <Form setData={setData} data={data} />;
}
