import { Component, OnInit } from '@angular/core';
import { Pronouce } from '../pronouce.model';
import { PronouceService } from '../pronouce.service';

@Component({
  selector: 'app-pronouce-sexuality',
  templateUrl: './pronouce-sexuality.component.html',
  styleUrls: ['./pronouce-sexuality.component.css']
})
export class PronouceSexualityComponent implements OnInit {
  sexuality:Array<any>
  pronouce: Pronouce;
  constructor(private pronouceService: PronouceService) {

   }

  ngOnInit(): void {
    this.pronouce = this.pronouceService.getPronouce();
    this.sexuality =this.pronouce.sexuality
  }

}
