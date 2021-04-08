import { UserRecord } from "./UserRecord.interface";

export type SignInData = Pick<UserRecord, "phoneNumber" | "password">;
