import { useState, useEffect } from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SecurityIcon from "@mui/icons-material/Security";
import { Rating, Tooltip } from "@mui/material";

function SummaryApi() {
  const [pageSize, setPageSize] = useState(10);

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/customer/${id}`, { method: "DELETE" });
    setTableData(tableData.filter((customer) => customer.id !== id));
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

  let widthid= widths-1400
  let widthname= widths-1300
  let witdhdetail= widths-1300
  if(widthname<80){
    widthname=80;
  }
  if(witdhdetail<80){
    witdhdetail=80;
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
      headerName: "gender",
      width: 150,
      type: "singleSelect",
      valueOptions: ["male", "female"],
      editable: true,
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
        <Tooltip
          title="Delete"
          placement="left"
        >
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteCustomer(params.id)}
          />
        </Tooltip>,
        <GridActionsCellItem
          icon={<SecurityIcon />}
          label="Toggle Admin"
          onClick={() => {}}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<FileCopyIcon />}
          label="Duplicate User"
          showInMenu
        />,
      ],
    },
  ];

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/customer")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <>id {widthid}</><br/>
      <>name {widthname}</><br/>
      <>detail {witdhdetail}</>
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
      />
    </div>
  );
}

export default SummaryApi;
