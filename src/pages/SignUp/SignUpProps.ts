export interface SignUpProps {
  handleInput: (event: any, type: "phoneNumber" | "password" | "plate") => void;
  handleSubmit: () => void;
}
