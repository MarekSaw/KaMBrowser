import {Injectable} from '@angular/core';
import {Field} from '../models/Field';
import {Tile} from '../models/Tile';


@Injectable({
  providedIn: 'root'
})
export class FieldServiceService {

  public field: Field;

  public tiles: Tile[];

  constructor() {
  }

  public saveField(fieldToSave: Field): void {
    this.field = fieldToSave;
  }

  public selectField(): Field {
    return this.field;
  }

  public saveTiles(tiles: Tile[]): void {
    this.tiles = tiles;
    console.log('saveTiles: ' + tiles);
    console.log('savedTiles: ' + this.tiles);
  }

  public selectTiles(): Tile[] {
    console.log('selectTiles: ' + this.tiles);
    return this.tiles;
  }

  public findFieldByWhereAndMap(where: number, map: string): Field {
    // todo get one field from repository?
    console.log('findFieldByWhereAndMap!');
    return new Field(1, map, where, 123, 5, 1);
  }

  updateField(field: Field): void {
    console.log('updateField!');
    const where = field.where;
    this.tiles.forEach(value => {
      if (value.tileNumber === where) {
        value.imgId = field.buildingId;
        value.className = 'grid-component-building-' + value.imgId;
      }
    });
    // todo update field in repository
  }
}
