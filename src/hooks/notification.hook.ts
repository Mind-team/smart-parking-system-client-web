import toast from "react-hot-toast";

export const useNotification = () => {
  const notification = {
    loading: (message?: string) => toast.loading(message ?? "Loading"),
    cancel: () => {
      toast.dismiss();
      return notification;
    },
    success: (message?: string) => toast.success(message ?? "Success"),
    error: (message: string) => toast.error(message)
  };

  return notification;
};