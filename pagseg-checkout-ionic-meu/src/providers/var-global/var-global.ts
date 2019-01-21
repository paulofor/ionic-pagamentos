import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VarGlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VarGlobalProvider {

  public status : boolean = false;

  constructor(public http: HttpClient) {
   
  }

  setStatusScripts(status : boolean) {
    this.status = status;
  }
  getStatusScript() {
    return this.status;
  }

}
