import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function RemoveDialog({
  open,
  handleClose,
  mode,
  handleDelete,
}) {
  const btnStyle = {
    width: "5.375rem",
    height: "2.25rem",
    borderRadius: "1.5rem",
    textTransform: "Capitalize",
    color: "text.secondary",
    border: "0.0625rem solid",
    borderColor: mode === "dark" ? "special.activeButton" : "special.iconHover",
    "&:hover": {
      backgroundColor: mode === "dark" ? "primary.light" : "primary.dark",
      color: "special.activeButton",
      borderColor: mode === "dark" ? "primary.light" : "primary.dark",
    },

    "&:focus": {
      backgroundColor:
        mode === "dark" ? "special.iconHover" : "background.paper",
      border: "0.125rem solid",
      borderColor: "background.default",
      outline: "0.125rem solid",
      outlineColor: "primary.main",
      "&:hover": {
        backgroundColor: mode === "dark" ? "primary.light" : "primary.dark",
        color: "special.activeButton",
        borderColor: mode === "dark" ? "primary.light" : "primary.dark",
        outlineColor: mode === "dark" ? "primary.light" : "primary.dark",
      },
    },
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="remove-dialog-title"
      aria-describedby="remove-dialog-description"
    >
      <DialogTitle
        component="h3"
        id="remove-dialog-title"
        fontSize={"1.75rem"}
        fontWeight={700}
      >
        Warning ⚠
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="remove-dialog-description"
          sx={{ color: mode === "dark" ? "text.secondary" : "text.third" }}
        >
          Are You Sure You Want To Delete This Extension?
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ justifyContent: "space-between", padding: "1rem 1.5rem" }}
      >
        <Button onClick={handleClose} sx={btnStyle}>
          Cancel
        </Button>
        <Button onClick={handleDelete} autoFocus sx={btnStyle}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
