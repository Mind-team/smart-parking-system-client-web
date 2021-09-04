import { Parking } from "./Parking.dto";

export interface User {
  phoneNumber: string;
  password: string;
  email?: string;
  plates: string[];
  parkings: Parking[];
}
