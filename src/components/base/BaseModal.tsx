import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";
import BaseButton from "./BaseButton";

interface BaseModalProps<T> {
  modalTitle: string;
  modalDescription: string;
  open: boolean;
  closeButtonName: string;
  onCloseClick?: () => void;
  customButtonName?: string;
  onCustomClick?: (custopProp: T) => void;
  customProp: T;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BaseModal<T>({
  modalTitle,
  modalDescription,
  open,
  closeButtonName,
  onCloseClick,
  ...customButton
}: BaseModalProps<T>) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onCloseClick}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <div>
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {modalTitle}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {modalDescription}
              </Typography>
              <div className="flex p-4">
                {customButton.customButtonName && (
                  <BaseButton
                    className="m-2"
                    name={customButton.customButtonName}
                    variant="contained"
                    onClick={() =>
                      customButton.onCustomClick?.(customButton.customProp)
                    }
                  ></BaseButton>
                )}
                <BaseButton
                  className="m-2"
                  name={closeButtonName}
                  variant="contained"
                  onClick={onCloseClick}
                ></BaseButton>
              </div>
            </Box>
          </Fade>
        </div>
      </Modal>
    </div>
  );
}
