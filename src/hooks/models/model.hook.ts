import {
  GetDriverResponseDto,
  GetLastParkingProcessDto,
  GetPPResponseDto,
} from "@ermolaev/mind-common";
import { ICompletedParkingProcess } from "./interfaces/completedParkingProcess.interface";
import { IDriver } from "./interfaces/driver.interface";
import { ModelToken } from "./modelToken.enum";
import { IUncompletedParkingProcess } from "./interfaces/uncompletedParkingProcess.interface";

const driverFromDto = (dto: GetDriverResponseDto): IDriver => {
  return { ...dto };
};

const completedParkingProcessFromDto = (
  dto: GetLastParkingProcessDto,
): ICompletedParkingProcess => {
  return {
    ...dto,
    payment: {
      currency: dto.payment.currency,
      value: Math.trunc(dto.payment.value),
    },
  };
};

const uncompletedParkingProcessFromDto = (
  dto: GetPPResponseDto,
): IUncompletedParkingProcess => {
  return {
    ...dto,
    departureCarTime: null,
    payment: {
      currency: dto.payment.currency,
      value: null,
    },
    isCompleted: false,
  };
};

export const useModel = <DTO, Model>(token: ModelToken, dto: DTO): Model => {
  switch (token) {
    case ModelToken.Driver:
      return driverFromDto(
        dto as unknown as GetDriverResponseDto,
      ) as unknown as Model;
    case ModelToken.CompletedParkingProcess:
      return completedParkingProcessFromDto(
        dto as unknown as GetLastParkingProcessDto,
      ) as unknown as Model;
    case ModelToken.UncompletedParkingProcess:
      return uncompletedParkingProcessFromDto(
        dto as unknown as GetPPResponseDto,
      ) as unknown as Model;
    default:
      throw new Error(token + " не существует");
  }
};
