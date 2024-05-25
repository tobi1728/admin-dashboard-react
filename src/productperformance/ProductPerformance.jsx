import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";

const data = [
  {
    id: 1,
    assigned: "Sunil Joshi",
    role: "Web Designer",
    name: "Sweat Pants",
    priority: "Low",
    sales: "$3.9k",
    priorityColor: blue[500],
  },
  {
    id: 2,
    assigned: "Andrew McDownland",
    role: "Project Manager",
    name: "Dress",
    priority: "Medium",
    sales: "$24.5k",
    priorityColor: blue[300],
  },
  {
    id: 3,
    assigned: "Christopher Jamil",
    role: "Project Manager",
    name: "Shoes",
    priority: "High",
    sales: "$12.8k",
    priorityColor: orange[500],
  },
  {
    id: 4,
    assigned: "Nirav Joshi",
    role: "Salesman",
    name: "T-Shirt",
    priority: "Critical",
    sales: "$2.4k",
    priorityColor: green[500],
  },
];

export const ProductPerformance = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: 600 }}>
          Product Performance
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Assigned</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="bold">
                      {row.assigned}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {row.role}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.priority}
                      sx={{ backgroundColor: row.priorityColor, color: "#fff" }}
                    />
                  </TableCell>
                  <TableCell>{row.sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
