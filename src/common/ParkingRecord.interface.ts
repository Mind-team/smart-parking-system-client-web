export interface ParkingRecord {
  _id: string;
  parkingTitle: string;
  carPlate: string;
  entryCarTime: string;
  departureCarTime: string;
  priceRub: number;
  parkingTimeMin: number;
  isCompleted: boolean;
}
