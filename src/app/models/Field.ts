export class Field{
  id: number;
  map: string;
  where: number;
  userId: number;
  buildingId: number;
  buildingLevel: number;

  constructor(id: number, map: string, where: number, userId: number, buildingId: number, buildingLevel: number) {
    this.id = id;
    this.map = map;
    this.where = where;
    this.userId = userId;
    this.buildingId = buildingId;
    this.buildingLevel = buildingLevel;
  }
}
