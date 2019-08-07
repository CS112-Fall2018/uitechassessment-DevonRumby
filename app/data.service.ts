import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
interface Items{
  id: number
  name: any
  description: any
  price: any
  amount: any
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://localhost:5555/list')
  }

  postItems(item: Items): boolean{
    this.http.post('http://localhost:5555/item/add', item).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
        return false;
      }
    );
    return true;
  }
}
