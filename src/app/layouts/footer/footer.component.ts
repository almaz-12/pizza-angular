import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuccessfulOrderComponent } from 'src/app/dialog/successful-order/successful-order.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() withoutDot: boolean = true;
  clientForm: FormGroup | any

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    if (this.withoutDot) {
      if(event.keyCode == 190) {
        event.preventDefault()
      }
    }
    return true;
  }

  private _createForm() {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['',[Validators.required]],
    })
  }

  get _name() {
    return this.clientForm.get('name')
  }

  get _address() {
    return this.clientForm.get('address')
  }

  get _phone() {
    return this.clientForm.get('phone')
  }

  newOrder() {
    if(!this._name.valid || !this._address.valid || !this._phone.valid) {
      console.log('В форме присутствуют ошибки')
      return
    }
    this.dialog.open(SuccessfulOrderComponent)
    this.clientForm.reset()
  }
  
  constructor(private fb: FormBuilder, public dialog: MatDialog) { 
    this._createForm()
  }

  ngOnInit(): void {
  }

}
