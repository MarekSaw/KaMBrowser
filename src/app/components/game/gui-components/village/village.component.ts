import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddingResourcesComponent);

    dialogRef.afterClosed().subscribe();
  }
}

@Component({
  selector: 'app-dialog-adding-resources',
  templateUrl: './dialog-adding-resources.component.html',
  styleUrls: ['./dialog-adding-resources.component.css']
})
export class DialogAddingResourcesComponent {}
