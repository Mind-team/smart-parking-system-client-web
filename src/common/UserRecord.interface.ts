import { ParkingRecord } from "./ParkingRecord.interface";

export interface UserRecord {
  phoneNumber: string;
  password: string;
  email?: string;
  plates: string[];
  parkingHistory: ParkingRecord[];
}
