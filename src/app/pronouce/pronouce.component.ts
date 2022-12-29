import { Component, OnInit } from '@angular/core';
import { PronouceService } from './pronouce.service';

@Component({
  selector: 'app-pronouce',
  templateUrl: './pronouce.component.html',
  styleUrls: ['./pronouce.component.css']
})
export class PronouceComponent implements OnInit {
  message = 'Hellow Adventer';
  constructor() { }

  ngOnInit(): void {
  }

}
