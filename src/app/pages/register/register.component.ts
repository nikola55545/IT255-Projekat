import { Component, OnInit, Output } from '@angular/core';
import { KorisniciService } from 'src/app/services/korisnici.service';
import { korisnik } from 'src/app/models/korisnik_klasa';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private korisnikServis: KorisniciService, private router: Router) { }

  @Output() korisnik!: korisnik

  ngOnInit(): void {
  }

  dodajKorisnika(korisnik: korisnik) {
    console.log(korisnik)
    this.korisnikServis.postKorisnik(korisnik).subscribe(
      res => {
        this.router.navigate(['admin']);


      }, err => {
        alert('Error occured...')
      }
    )
  }

}
