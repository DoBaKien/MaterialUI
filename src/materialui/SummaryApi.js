import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Rating, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function SummaryApi() {
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/customer/${id}`, { method: "DELETE" });
    setTableData(tableData.filter((customer) => customer.id !== id));
  };

  const UpdateUser = (id) => {
    navigate(`/useredit/${id}`);
  };

  const [widths, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  });

  let widthid = widths - 1400;
  let widthname = widths - 1300;
  let witdhdetail = widths - 1300;
  if (widthname < 80) {
    widthname = 80;
  }
  if (witdhdetail < 80) {
    witdhdetail = 80;
  }
  const columns = [
    { field: "id", headerName: "ID", width: widthid },
    {
      field: "preview",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt=""
          width={50}
          style={{ marginLeft: "15px" }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: widthname },
    { field: "details", headerName: "Details", width: witdhdetail },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
      type: "singleSelect",
      valueOptions: ["male", "female"],
      editable: true,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      renderCell: (params) => <Rating value={params.value} readOnly />,
    },
    {
      field: "actions",
      headerName: "Edit",
      type: "actions",
      width: 120,
      getActions: (params) => [
        <Tooltip title="Edit" placement="left">
          <Button
            startIcon={<ModeEditIcon />}
            color="success"
            variant="outlined"
            onClick={() => UpdateUser(params.id)}
          >
            Edit
          </Button>
        </Tooltip>,
      ],
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "actions",
      width: 120,
      getActions: (params) => [
        <Tooltip title="Delete" placement="left">
          <Button
            startIcon={<DeleteIcon />}
            color="error"
            variant="outlined"
            onClick={() => deleteCustomer(params.id)}
          >
            Delete
          </Button>
        </Tooltip>,
      ],
    },
  ];
  const handleOnCellClick = (params) => {
    navigate(`/profile/${params.id}`);
  };

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/customer")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 670, width: "100%" }}>
      {/* <>id {widthid}</>
      <br />
      <>name {widthname}</>
      <br />
      <>detail {witdhdetail}</> */}
      <div style={{ height: 600 }}>
        <DataGrid
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
          onCellDoubleClick={handleOnCellClick}
        />
      </div>
    </div>
  );
}

export default SummaryApi;
