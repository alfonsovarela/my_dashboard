import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = 'https://api.github.com/users/timmywheels/repos';

  constructor(private _http: HttpClient) {
   }

   getReposFromUser(user: string): Observable<any> {
     return this._http.get(`https://api.github.com/users/${user}/repos`);
   }

   getUserData(user: string): Observable<any> {
     return this._http.get(`https://api.github.com/users/${user}`);
   }


}
