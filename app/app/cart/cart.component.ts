import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

declare var index: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Object;
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getItems().subscribe(data => {
      this.items = data
      console.log(this.items);
    }
    );
  }
  
}
