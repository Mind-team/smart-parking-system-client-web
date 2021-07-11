import { Parking } from "./Parking.dto";

export interface User {
  _id: string;
  phoneNumber: string;
  password: string;
  email?: string;
  plates: string[];
  parkings: Parking[];
}
