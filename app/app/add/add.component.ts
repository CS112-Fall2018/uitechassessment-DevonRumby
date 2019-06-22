import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  item;
  sand;
  submitted;
  name = new FormControl(' ');
  description = new FormControl( ' ' );
  price = new FormControl(' ');
  amount = new FormControl( ' ' );
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.submitted = false;
  }

  click(){
    console.log(this.name.value)
    
    const item = 
      {
        id: this.data.getItems.length + 1,
        name: this.name.value,
        description: this.description.value,
        price: this.price.value,
        amount:  this.amount.value
      }
    if(this.data.postItems(item)){
      this.submitted = true;
    }
      
  }

}