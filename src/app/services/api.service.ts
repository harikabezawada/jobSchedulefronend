import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  createJob(userdata) {
    console.log(userdata)
  
    return this.http.post(environment.ApiUrl + '/scheduleJob', userdata).pipe(map(asset => {
      console.log(asset,'res')
      return asset;
    }))
  }
  loggedIn(userdata) {
    console.log(userdata)

    return this.http.post(environment.ApiUrl + '/signIn', userdata).pipe(map(asset => {
      return asset;
    }))
  }
  signUp(userdata) {

  
    
    return this.http.post(environment.ApiUrl + '/signUp', userdata).pipe(map(asset => {
      return asset;
    }))
  }
  schedulesList() {
    //console.log()

    return this.http.get(environment.ApiUrl + '/schedulesList').pipe(map(asset => {
      return asset;
    }))
  } 
}
