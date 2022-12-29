import { Component, OnInit } from '@angular/core';
import { Pronouce } from '../pronouce.model';
import { PronouceService } from '../pronouce.service';

@Component({
  selector: 'app-pronouce-list',
  templateUrl: './pronouce-list.component.html',
  styleUrls: ['./pronouce-list.component.css']
})
export class PronouceListComponent implements OnInit {
   pronouces_good:Array<any>
   pronouces_neutral:Array<any>
   pronouce: Pronouce;
  constructor(private pronouceService: PronouceService) { }

  ngOnInit(): void {
    this.pronouce = this.pronouceService.getPronouce();
    this.pronouces_good =this.pronouce.pronouces_good
    this.pronouces_neutral =this.pronouce.pronouces_neutral
    console.log(this.pronouce.pronouces_good)
  }

}
