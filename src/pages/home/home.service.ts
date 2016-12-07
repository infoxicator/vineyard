import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HomeService {
  private  baseurl: string = 'http://www.brightonvineyard.com/wp-json/wp/v2/';
  events: any;
    constructor(private http:Http){}
    getChurchEvents() {
       return this.http.get(`${this.baseurl}posts/?filter[category_name]=events`)
            .toPromise()
            .then(res => res.json());            
    }
    getLatestPosts() {
       return this.http.get(`${this.baseurl}posts/`)
            .toPromise()
            .then(res => res.json());            
    }
}