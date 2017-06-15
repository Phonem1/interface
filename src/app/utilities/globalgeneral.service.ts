import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Custom } from './globalmodel';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class GlobalGeneralService {
  private notify = new Subject<any>();

  private _dataurl = 'assets/data/globaldata.json';  

  notifyObservable$ = this.notify.asObservable();

  constructor(private http: Http) { }

  notifyNavBar(data:string){
    if(data)
    this.notify.next(data);
  }

  getPrimaryData(): Observable<Custom[]> {
    //return this.http.get(this._dataurl).map((res:Response)=> <Custom> res.json()).do(data=>console.log(JSON.stringify(data))).catch(this.handleError);
    return this.http.get(this._dataurl).map(this.extractData).do(data=>console.log(JSON.stringify(data))).catch(this.handleError);
  }

  private extractData(res:Response){
    let body =  res.json();
    return body || {};
  }

  private handleError(error:any, caught:any):any{
    console.log(error,caught);
  }

}