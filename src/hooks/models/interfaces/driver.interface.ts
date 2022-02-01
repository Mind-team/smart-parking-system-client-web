export interface IDriver {
  _id: string;
  phoneNumber: string;
  password: string;
  email?: string;
  type: 0;
  carPlates: string[];
  parkingProcessIds: string[];
  currentParkingProcessId: string | null;
}
