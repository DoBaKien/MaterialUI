import { useState, useEffect } from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Rating } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ListBook() {
  const [pageSize, setPageSize] = useState(10);

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/books/${id}`, { method: "DELETE" });
    setTableData(tableData.filter((customer) => customer.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "pic",
      headerName: "image",
      width: 100,
      height: 200,
      renderCell: (params) => (
        <img src={params.value} alt="" height={100} width={80} />
      ),
    },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "details",
      headerName: "Details",
      width: 600,
      height: 200,
      renderCell: (params) => (
        <textarea disabled value={params.value} rows="6" cols="90" style={{border: "none", resize:"none"}}></textarea>
      ),
    },
    {
      field: "rating",
      headerName: "rating",
      width: 150,
      renderCell: (params) => <Rating value={params.value} readOnly />,
    },
    {
      field: "actions",
      headerName: "Action",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => deleteCustomer(params.id)}
        />,
        <GridActionsCellItem icon={<VisibilityIcon />} onClick={() => {}} />,
      ],
    },
  ];

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 656, width: "100%" }}>
      <DataGrid
        rowHeight={150}
        rows={tableData}
        columns={columns}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          ...tableData.initialState,
        }}
      />
    </div>
  );
}

export default ListBook;
