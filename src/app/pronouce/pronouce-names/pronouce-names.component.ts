import { Component, OnInit } from '@angular/core';
import { Pronouce } from '../pronouce.model';
import { PronouceService } from '../pronouce.service';

@Component({
  selector: 'app-pronouce-names',
  templateUrl: './pronouce-names.component.html',
  styleUrls: ['./pronouce-names.component.css']
})
export class PronouceNamesComponent implements OnInit {
  names:Array<any>
  pronouce: Pronouce;
  constructor(private pronouceService: PronouceService) { }

  ngOnInit(): void {
    this.pronouce = this.pronouceService.getPronouce();
    this.names =this.pronouce.names
  }

}
