import React, { useMemo } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import SecurityIcon from "@mui/icons-material/Security";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";


let d = new Date();

const rows = [
  { id: 1, name: "Kien", age: 21, country: "Vietnam", job: "sv", dateCreated: "26.04.2013"},
  { id: 2, name: "Tung", age: 21, country: "Vietnam", job: "sv", dateCreated: d },
  { id: 3, name: "Trung", age: 21, country: "Vietnam", job: "sv", dateCreated: d },
  { id: 4, name: "Dinh", age: 21, country: "Vietnam", job: "sv", dateCreated: d },
  { id: 5, name: "Long", age: 22, country: "Vietnam", job: "sv", dateCreated: d },
];
const Summary = () => {
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 100 },
      { field: "name", headerName: "Name", width: 200 },
      { field: "country", headerName: "Country", width: 200 },
      { field: "age", headerName: "Age", width: 100 },
      {
        field: "job",
        headerName: "Job",
        width: 200,
        type: "singleSelect",
        valueOptions: [
          "sv",
          "đi làm"
        ],
        editable: true,
      },
      {
        field: 'dateCreated',
        headerName: 'Date Created',
        type: 'date',
        width: 180,
        editable: true,
      },
      {
        field: "actions",
        headerName: "Action",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            showInMenu
          />,
        ],
      },
    ],
    []
  );

  return (
    <div
      style={{
        height: 600,
        width: "80%",
        margin: "auto",
        paddingBottom: "100px",
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Summary
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
export default Summary;
