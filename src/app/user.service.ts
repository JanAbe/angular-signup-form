import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = `${environment.apiUrl}/users`

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.usersUrl,
      user,
     { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    );
  }
}
