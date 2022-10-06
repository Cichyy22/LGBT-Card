import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronouce-sexuality',
  templateUrl: './pronouce-sexuality.component.html',
  styleUrls: ['./pronouce-sexuality.component.css']
})
export class PronouceSexualityComponent implements OnInit {
  sexuality=["bi", "enby", "trans"]
  constructor() { }

  ngOnInit(): void {
  }

}
