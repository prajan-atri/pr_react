import useLocalStorage from "./utils";

import { useTable } from "react-table";
import React from "react";
import Table from "./tableComponents/Table";

function GridView() {
  const [data, setData] = useLocalStorage("todo", [
    {
      title: "Task 1",
      description: "This is task 1",
      done: true,
    },
  ]);

  const memoisedData = React.useMemo(() => data, []);

  return <Table data={memoisedData} setData={setData} />;
}

export default GridView;
