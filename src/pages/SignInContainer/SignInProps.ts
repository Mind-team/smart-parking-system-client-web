export interface SignInProps {
  handleInput: (event: any, type: "phoneNumber" | "password") => void;
  handleSubmit: () => void;
}
