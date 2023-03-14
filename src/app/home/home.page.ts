import { Component } from '@angular/core';
import { DatabaseConnectService } from '../database-connect.service';
import { Data } from 'src/models/data.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  i = 0;
  id = 0;
  l=[];
  inputProvince: string;
  new: string;
  status=['Data has been added to the database','The input needed for the operation is empty',
        'Value of number of new cases is not an integer','Unknown error occured',''
        ,'Can\'t find data for the province'];
  public data$: Observable<Data>;
  public status$: Observable<Data>;
  constructor(private dcs: DatabaseConnectService) {}
  to0()
  {
    this.i=0;
    //this.status=0;
  }
  to1()
  {
    this.i=1;
  }
  to2()
  {
    this.i=2;
    this.id=0;
    this.l=[];
    this.dcs.byname(this.id,this.l,null);
  }
  to3()
  {
    this.i=3;
    this.id=0;
    this.l=[];
    this.dcs.byvalue(this.id,this.l,null);
  }
  insertData()
  {
    this.status$=this.dcs.insertData(this.inputProvince,this.new);
    this.data$= new Observable<Data>();
  }
  retrieveData()
  {
    this.data$=this.dcs.retrieveData(this.inputProvince);
    this.status$= new Observable<Data>();
  }
  loadDataName(event)
  {
    this.id+=10;
    this.dcs.byname(this.id,this.l,event);
  }
  loadDataValue(event)
  {
    this.id+=10;
    this.dcs.byvalue(this.id,this.l,event);
  }
}
