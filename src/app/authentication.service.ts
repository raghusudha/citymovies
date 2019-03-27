import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://localhost:3000/api/customers';
  customers:any=[{"id":3,"name":"Memet","year":2017,"image_url":"https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg","production_house":"ABC Movies","rating":5,"type":"epic","language":"Telugu","date":"2017-09-30T18:30:00.000Z"},
  {"id":2,"name":"Captain Marvel","year":2019,"image_url":"https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg","production_house":"Australia X","rating":4,"type":"fiction","language":"English","date":"2019-01-31T18:30:00.000Z"}];


  constructor(private http: HttpClient) { }
  movie=JSON.parse(localStorage.getItem('customers'));
}