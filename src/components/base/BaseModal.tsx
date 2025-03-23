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
  negativeButtonName?: string;
  onNegativeButtonClick?: () => void;
  positiveButtonName?: string;
  onPositiveButtonClick?: (custopProp: T) => void;
  customProp: T;
}

export default function BaseModal<T>({
  modalTitle,
  modalDescription,
  open,
  negativeButtonName,
  onNegativeButtonClick,
  ...customButton
}: BaseModalProps<T>) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onNegativeButtonClick}
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
            <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max bg-white shadow-lg p-4 rounded-lg">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {modalTitle}
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
                className="whitespace-pre-line"
              >
                {modalDescription}
              </Typography>
              <div className="flex justify-center p-4">
                {customButton.positiveButtonName && (
                  <BaseButton
                    className="m-2 w-max"
                    name={customButton.positiveButtonName}
                    variant="contained"
                    onClick={() =>
                      customButton.onPositiveButtonClick?.(
                        customButton.customProp
                      )
                    }
                  ></BaseButton>
                )}
                <BaseButton
                  className="m-2 w-max"
                  name={negativeButtonName}
                  variant="contained"
                  onClick={onNegativeButtonClick}
                ></BaseButton>
              </div>
            </Box>
          </Fade>
        </div>
      </Modal>
    </div>
  );
}
