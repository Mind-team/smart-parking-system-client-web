import toast from "react-hot-toast";
import { lightModeConfig } from "../styles/ModeConfig";
import { ModeConfig } from "../store/types/appearanceMode";

type Standard = (message?: string) => void;

interface Notification {
  loading: Standard;
  success: Standard;
  error: Standard;
  cancel: () => Notification;
}

export const useNotification = (
  modeConfig: ModeConfig = lightModeConfig,
): Notification => {
  const notification = {
    loading: (message?: string) =>
      toast.loading(message ?? "Loading", {
        style: {
          background: modeConfig.additionalBGColor ?? "#ffffff",
          color: modeConfig.textColor,
        },
      }),
    success: (message?: string) =>
      toast.success(message ?? "Success", {
        style: {
          background: modeConfig.additionalBGColor ?? "#ffffff",
          color: modeConfig.textColor,
        },
      }),
    error: (message?: string) =>
      toast.error(message ?? "Error", {
        style: {
          background: modeConfig.additionalBGColor ?? "#ffffff",
          color: modeConfig.textColor,
        },
      }),
    cancel: () => {
      toast.dismiss();
      return notification;
    },
  };

  return notification;
};
