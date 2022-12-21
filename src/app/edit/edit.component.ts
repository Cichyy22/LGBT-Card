import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  words_col_1=["[no honorific]", "mx.", "mr.", "ms.", "sir"]
  words_col_2=["person", "dude", "buddy"]
  words_col_3=["husband", "partner", "boyfriend", "girlfriend"]
  words_col_4=[]
  signForm = new FormGroup({
    message: new FormControl(null, [Validators.required]),
    name: new FormArray([]),
    pronouns: new FormArray([]),
    pronouns_neutral: new FormArray([]),
    sexuality: new FormArray([]),
    links: new FormArray([
      new FormGroup({
      social: new FormControl(''),
      url: new FormControl('')
      })
    ]),
    selectedWords: new FormArray([]),
    s_identity: new FormControl(5, [Validators.required]),
    s_expression: new FormControl(5, [Validators.required]),
    s_orientation: new FormControl(5, [Validators.required]),
    s_drive: new FormControl(5, [Validators.required]),
    s_desire: new FormControl(5, [Validators.required]),
    s_attitude: new FormControl(5, [Validators.required]),
    s_exploration: new FormControl(5, [Validators.required])
  })
  word=''
  name = this.signForm.get("name") as FormArray;
  pronouns = this.signForm.get("pronouns") as FormArray;
  pronouns_neutral= this.signForm.get("pronouns_neutral") as FormArray;
  sexuality = this.signForm.get("sexuality") as FormArray;
  links = this.signForm.get("links") as FormArray;

  onSubmit(){
    console.log(this.signForm.value)
    this.signForm.reset();
  }

  addName() {
    this.name.push(new FormControl(''));
  }
  removeName(index: number) {
    this.name.removeAt(index);
  }
  addPronouns() {
    this.pronouns.push(new FormControl(''));
  }
  removePronouns(index: number) {
    this.pronouns.removeAt(index);
  }
  addPronounsN() {
    this.pronouns_neutral.push(new FormControl(''));
  }
  removePronounsN(index: number) {
    this.pronouns_neutral.removeAt(index);
  }
  addSexuality() {
    this.sexuality.push(new FormControl(''));
  }
  removeSexuality(index: number) {
    this.sexuality.removeAt(index);
  }
  addLinks() {
    this.links.push(new FormControl(''));
  }
  removeLinks(index: number) {
    this.links.removeAt(index);
  }
  addWord(word){
    this.words_col_4.push(word)
  }

  onCheckboxChange(event: any) {
    const selectedWords = (this.signForm.controls['selectedWords'] as FormArray);
    if (event.target.checked) {
      selectedWords.push(new FormControl(event.target.value));
    } else {
      const index = selectedWords.controls
      .findIndex(x => x.value === event.target.value);
      selectedWords.removeAt(index);
    }
  }

}
