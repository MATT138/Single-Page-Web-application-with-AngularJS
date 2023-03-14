/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data.model';
@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectService {
  private ngURL='http://3726-35-237-129-216.ngrok.io/';
  constructor(public http: HttpClient){}
  retrieveData(p: string)
  {
    return this.http.get<Data>(this.ngURL+'get_data?province='+p);
  }
  insertData(p: string, n: string)
  {
    return this.http.get<Data>(this.ngURL+'insert?province='+p+'&number='+n);
  }
  byvalue(id,list,event)
  {
    this.http.get(this.ngURL+'byvalue?id='+id).subscribe(data=>
      {
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        for (let i=0; i < data[1]['data2'].length;i++) {
          list.push(data[1]['data2'][i]);
          console.log(data[1]['data2'][i]);
        }
      }
    );
    if(id !==0)
    {
      event.target.complete();
    }
  }
  byname(id,list,event)
  {
    this.http.get(this.ngURL+'byname?id='+id).subscribe(data=>
      {
        console.log(data);
        //eslint-disable-next-line @typescript-eslint/dot-notation
        for (let i=0; i < data[1]['data2'].length;i++) {
          list.push(data[1]['data2'][i]);
          console.log(data[1]['data2'][i]);
        }
      }
    );
    if(id !==0)
    {
      event.target.complete();
    }
  }
}
