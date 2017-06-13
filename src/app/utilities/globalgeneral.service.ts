import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const myprimarydata = '../assets/data/globaldata.json';

@Injectable()
export class GlobalGeneralService {
  private notify = new Subject<any>();

  notifyObservable$ = this.notify.asObservable();

  constructor(private http: Http) { }

  notifyNavBar(data:string){
    if(data)
    this.notify.next(data);
  }

  getPrimaryData(){
    return this.http.request(myprimarydata).map(res=>res.json()).catch(this.handleError);
  }

  private handleError(error:any, caught:any):any{
    console.log(error,caught);
  }

}