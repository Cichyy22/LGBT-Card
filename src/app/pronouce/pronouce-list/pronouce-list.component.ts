import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronouce-list',
  templateUrl: './pronouce-list.component.html',
  styleUrls: ['./pronouce-list.component.css']
})
export class PronouceListComponent implements OnInit {
   pronouces_good= ['he/him', 'she/her']
   pronouces_neutral=['they/them']
  constructor() { }

  ngOnInit(): void {
  }

}
