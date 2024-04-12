export interface ILocation {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: ILocalizedNameID;
  AdministrativeArea: ILocalizedNameID;
}

export interface ILocalizedNameID {
  ID: string;
  LocalizedName: string;
}
