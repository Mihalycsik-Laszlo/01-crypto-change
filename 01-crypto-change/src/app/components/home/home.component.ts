import { Component } from '@angular/core';
import { Crypto } from 'src/app/models/crypto';
import { cryptoList } from 'src/app/models/crypto-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allCryptos: Crypto[] = [];
  activeCryptos: Crypto[] = [];
}
