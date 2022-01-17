import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { korisnik } from '../../models/korisnik_klasa';
@Component({
  selector: 'app-korisnik-edit',
  templateUrl: './korisnik-edit.component.html',
  styleUrls: ['./korisnik-edit.component.scss']
})
export class KorisnikEditComponent implements OnInit {

  @Input() korisnik!: korisnik
  @Output() brisanjeKlik: EventEmitter<korisnik> = new EventEmitter();
  @Output() izmeniKlik: EventEmitter<korisnik> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  brisanje(korisnik: korisnik) {
    this.brisanjeKlik.emit(korisnik);
  }
  izmena() {
    this.izmeniKlik.emit(this.korisnik);
  }

}
