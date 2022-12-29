import { Component, OnInit } from '@angular/core';
import { Pronouce } from '../pronouce.model';
import { PronouceService } from '../pronouce.service';

@Component({
  selector: 'app-pronouce-words',
  templateUrl: './pronouce-words.component.html',
  styleUrls: ['./pronouce-words.component.css']
})
export class PronouceWordsComponent implements OnInit {
  pronouce: Pronouce;
  words_col_1:Array<any>
  words_col_2:Array<any>
  words_col_3:Array<any>
  words_col_4:Array<any>
  constructor(private pronouceService: PronouceService) { }
  ngOnInit() {
    this.pronouce = this. pronouceService.getPronouce();
    this.words_col_1=this.pronouce.selectedWords1
    this.words_col_2=this.pronouce.selectedWords2
    this.words_col_3=this.pronouce.selectedWords3
    this.words_col_4=this.pronouce.selectedWords4
  }


}
