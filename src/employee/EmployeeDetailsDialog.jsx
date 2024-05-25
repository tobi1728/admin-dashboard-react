import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Box } from "@mui/material";
import { styled } from "@mui/material";

const RowWrapper = styled(Typography)({
  display: "flex",
  gap: 0.5,
});

const Strong = ({ children }) => (
  <Typography sx={{ fontWeight: "bold" }} as="strong">
    {children}
  </Typography>
);

export const EmployeeDetailsDialog = ({
  employeeDetailsId,
  setEmployeeDetailsId,
  currentEmployee,
}) => (
  <Dialog
    open={Boolean(employeeDetailsId)}
    onClose={() => setEmployeeDetailsId(null)}
  >
    <IconButton
      aria-label="close"
      onClick={() => setEmployeeDetailsId(null)}
      sx={{ position: "absolute", right: 2, top: 2 }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent sx={{ color: "#5A6A85" }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Details of:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, width: 300 }}>
        <Avatar
          src={currentEmployee?.picture}
          alt={`${currentEmployee?.name} ${currentEmployee?.surname}`}
          sx={{ width: 100, height: 100, mr: 2, borderRadius: "50%" }}
        />
        <Box>
          <Typography variant="h6" component="div">
            {currentEmployee?.name}
          </Typography>
          <Typography variant="h6" component="div">
            {currentEmployee?.surname}
          </Typography>
        </Box>
      </Box>
      <RowWrapper>
        <Strong>Role:</Strong>
        {currentEmployee?.role}
      </RowWrapper>
      <RowWrapper>
        <Strong>Salary:</Strong>
        {currentEmployee?.salary}
      </RowWrapper>
      <RowWrapper>
        <Strong>Phone:</Strong>
        {currentEmployee?.phoneNumber}
      </RowWrapper>
      <RowWrapper>
        <Strong>Avg sales:</Strong>
        {currentEmployee?.sales}
      </RowWrapper>
      <RowWrapper>
        <Strong>Seniority:</Strong>
        {currentEmployee?.seniority}
      </RowWrapper>
    </DialogContent>
  </Dialog>
);
