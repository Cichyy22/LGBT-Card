import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronouce-names',
  templateUrl: './pronouce-names.component.html',
  styleUrls: ['./pronouce-names.component.css']
})
export class PronouceNamesComponent implements OnInit {
  names=["Jakub", 'Rolegur']
  constructor() { }

  ngOnInit(): void {
  }

}
