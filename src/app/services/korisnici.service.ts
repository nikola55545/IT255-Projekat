import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik_klasa';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  private korisniciAPI = 'http://localhost:3000/korisnici';
  constructor(private http: HttpClient) { }

  getKorisnici(): Observable<korisnik[]> {
    return this.http.get<korisnik[]>(this.korisniciAPI)
  }

  postKorisnik(korisnik: korisnik): Observable<korisnik> {
    return this.http.post<korisnik>(this.korisniciAPI, korisnik, httpOptions)
  }

  putKorisnik(korisnik: korisnik): Observable<korisnik> {
    const url = `${this.korisniciAPI}/${korisnik.id}`;
    return this.http.put<korisnik>(url, korisnik, httpOptions)
  }

  deleteKorisnik(korisnik: korisnik): Observable<korisnik> {
    const url = `${this.korisniciAPI}/${korisnik.id}`;
    return this.http.delete<korisnik>(url);

  }
}