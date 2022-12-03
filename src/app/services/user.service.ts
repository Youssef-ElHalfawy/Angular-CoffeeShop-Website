import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:3005/users'
  constructor(private myClient:HttpClient) { }

getAllUsers(){
  return this.myClient.get(this.baseURL)
}
getUserById(userId:any){
  return this.myClient.get(`${this.baseURL}/${userId}`)
}
addUser(newUser:any){
  return this.myClient.post(this.baseURL, newUser)
}
editUser(userId:any,user:any){
  return this.myClient.put(`${this.baseURL}/${userId}`, user)
}
deleteUser(userId:any){
  return this.myClient.delete(`${this.baseURL}/${userId}`)
}
}