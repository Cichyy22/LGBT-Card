import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronouce',
  templateUrl: './pronouce.component.html',
  styleUrls: ['./pronouce.component.css']
})
export class PronouceComponent implements OnInit {
  your_mess = 'Hellow Adventer';
  constructor() { }

  ngOnInit(): void {
  }

}
