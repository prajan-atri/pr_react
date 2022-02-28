import React from "react";
import { useTable } from "react-table";

export default function Table({ data, setData }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Player Name",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Player ID",
        accessor: "description",
      },
      /*{
        Header: "Is Done",
        accessor: "done",
      },*/
      {
        Header: "Delete ?",
        id: "",
        accessor: (original, rowIndex) => {
          return (
            <button
              onClick={() => {
                setData(data.filter((_, index) => index !== rowIndex));
              }}
            >
              Delete
            </button>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "grey",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "green",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
