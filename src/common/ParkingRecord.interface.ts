export interface ParkingRecord {
  _id: string;
  parkingTitle: string;
  carPlate: string;
  entryCarTime: Date;
  departureCarTime: Date;
  priceRub: number;
}
