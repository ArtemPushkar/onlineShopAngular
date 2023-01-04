import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    legs: new FormControl(''),
    eyes: new FormControl(''),
    memory: new FormControl(''),
  })


  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {

    this.data = {
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      image: "assets/images/Majestic-Sow.jpeg",
      cofigure: {
        color: this.myForm.value.color,
        legs: this.myForm.value.legs,
        eyes: this.myForm.value.eyes,
        memory: this.myForm.value.memory
      }
    }
   
   this.dialogRef.close(this.data)

  }

  ngOnInit(): void {
  }

}
