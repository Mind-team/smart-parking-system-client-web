import { DriverType } from "../../common/driver";

export class GetDriverDataResponseDto {
  _id: string;
  carPlates: string[];
  parkingProcessIds: string[];
  currentParkingProcessId: string | null;
  phoneNumber: string;
  password: string;
  email?: string;
  type: DriverType;
}
