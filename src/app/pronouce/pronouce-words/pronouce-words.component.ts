import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronouce-words',
  templateUrl: './pronouce-words.component.html',
  styleUrls: ['./pronouce-words.component.css']
})
export class PronouceWordsComponent implements OnInit {
  words_col_1=["[no honorific]", "mx.", "mr.", "ms.", "sir"]
  words_col_2=["person", "dude", "buddy"]
  words_col_3=["husband", "partner", "boyfriend", "girlfriend"]
  constructor() { }

  ngOnInit(): void {
  }

}
