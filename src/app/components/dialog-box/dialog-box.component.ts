import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data) this.isNew = false;
  }

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? null),
    price: new FormControl(this.data?.price ?? null),
    color: new FormControl(this.data?.color ?? null),
    legs: new FormControl(this.data?.legs ?? null),
    eyes: new FormControl(this.data?.eyes ?? null),
    memory: new FormControl(this.data?.memory ?? null),
  })

  isNew: boolean = true;


  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {

    this.data = {
      id: this.myForm.value.id,
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
