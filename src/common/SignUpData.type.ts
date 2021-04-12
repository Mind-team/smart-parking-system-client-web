import { UserRecord } from "./UserRecord.interface";

export type SignUpData = Omit<UserRecord, "parkingHistory">;
