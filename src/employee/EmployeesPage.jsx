import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { employeesMock } from "./mocks/employeesMock";
import { Link, Typography, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";

import { useAuth } from "../authProvider";
import { EmployeeDetailsDialog } from "./EmployeeDetailsDialog";

export const EmployeesPage = () => {
  const { isLoggedIn } = useAuth();
  const [employees, setEmployees] = React.useState(employeesMock);

  const [employeeDetailsId, setEmployeeDetailsId] = React.useState(null);

  const currentEmployee = employeeDetailsId
    ? employees.find((employee) => employee.id === employeeDetailsId)
    : null;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      valueGetter: (value, row) => `${row.name} ${row.surname}`,
      width: 250,
    },
    {
      field: "picture",
      headerName: "Photo",
      width: 200,
      renderCell: (params) => (
        <img
          src={params.row.picture}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

          const rowId = params.row.id;

          setEmployeeDetailsId(rowId);
        };

        return (
          <Button
            onClick={onClick}
            sx={{ color: "#5D87FF", textTransform: "capitalize" }}
          >
            <ZoomInIcon sx={{ marginRight: 2 }} />
            Show Details
          </Button>
        );
      },
    },
  ];

  const rows = employees;

  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <Breadcrumbs sx={{ marginLeft: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Employees</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} mt={5} px={5} justifyContent={"center"}>
        <DataGrid
          sx={{
            maxWidth: "90%",
            marginLeft: "50px",
            marginTop: "50px",
            padding: 2,
            color: "#5A6A85",
            height: 403,
            border: 0,
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)",
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Grid>
      <EmployeeDetailsDialog
        employeeDetailsId={employeeDetailsId}
        setEmployeeDetailsId={setEmployeeDetailsId}
        currentEmployee={currentEmployee}
      />
    </>
  );
};
