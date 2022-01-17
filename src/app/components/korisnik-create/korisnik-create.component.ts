import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { korisnik } from '../../models/korisnik_klasa';
import { KorisniciService } from '../../services/korisnici.service';

@Component({
  selector: 'app-korisnik-create',
  templateUrl: './korisnik-create.component.html',
  styleUrls: ['./korisnik-create.component.scss']
})
export class KorisnikCreateComponent implements OnInit {

  username!: string;
  password!: string;

  @Output() klikDodavanje: EventEmitter<korisnik> = new EventEmitter();
  constructor(private korisnikServis: KorisniciService) { }

  ngOnInit(): void {

  }

  registracija() {
    if (!this.username) {
      alert('Empty!')
    }
    const novi_korisnik = {
      id: Object.keys(this.korisnikServis.getKorisnici().subscribe()).length,
      username: this.username,
      password: this.password,
      admin: false
    }

    this.klikDodavanje.emit(novi_korisnik)

    this.username = '';
    this.password = '';
  }

}
