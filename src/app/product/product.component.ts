import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../dialog/image-popup/image-popup.component';

export interface DialogData {
  src: '';
  name: '';
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;


  openDialog(event: any): void {
    const name = event.srcElement.alt;
    const src = event.srcElement.currentSrc;
    this.dialog.open(ImagePopupComponent, {
      data: { src: src, name: name }
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
