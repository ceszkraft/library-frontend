import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorsModel } from 'src/app/models/authors';
import { BASEURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getUserService(): Observable<AuthorsModel[]>{
    return this.http.get<AuthorsModel[]>(`${BASEURL.authors}`)
  }
  
  getUserByIdService(id: number): Observable<AuthorsModel>{
    return this.http.get<AuthorsModel>(`${BASEURL.authors}` + id)
  }

  deleteUserService(id: number): Observable<AuthorsModel>{
    return this.http.delete<AuthorsModel>(`${BASEURL.authors}`+id)
  }
  
  postUserService(user: AuthorsModel): Observable<AuthorsModel>{
    return this.http.post<AuthorsModel>(`${BASEURL.authors}`, user)
  }
  
  putUserService(user: AuthorsModel){
    return this.http.put<AuthorsModel>(`${BASEURL.authors}` + user.id, user)
  }

// GETFAKE
  getUserServiceFake(): Observable<AuthorsModel[]>{
    return this.http.get<AuthorsModel[]>(`${BASEURL.authorsFake}`)
  }
  
}