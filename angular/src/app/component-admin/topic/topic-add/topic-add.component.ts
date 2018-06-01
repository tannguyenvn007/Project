import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
export class TopicAddComponent implements OnInit {

  constructor(private _http: Http) { }
    private headers = new Headers({'Content-Type': 'application/json'})
  ngOnInit() {
  }
  onSubmit(form: NgForm): Promise <Item>{
    return this._http.post('http://127.0.0.1:8000/api/topics',JSON.stringify(form.value),{headers: this.headers}).toPromise().then(res => res.json().data).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}
