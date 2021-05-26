import { ParkingRecord } from "./ParkingRecord.interface";
import { PlateRecord } from "./PlateRecord.interface";
import { PhoneNumberRecord } from "./PhoneNumberRecord.interface";

export interface UserRecord {
  _id: string;
  phoneNumber: PhoneNumberRecord;
  password: string;
  email?: string;
  plates: PlateRecord[];
  parkingHistory: ParkingRecord[];
}
