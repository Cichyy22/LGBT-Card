import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Pronouce } from '../pronouce/pronouce.model';
import { PronouceService } from '../pronouce/pronouce.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private pronouceService: PronouceService){}
  words_col_1=["[no honorific]", "mx.", "mr.", "ms.", "sir"]
  words_col_2=["person", "dude", "buddy"]
  words_col_3=["husband", "partner", "boyfriend", "girlfriend"]
  words_col_4=[]
  signForm = new FormGroup({
    message: new FormControl<string>('', Validators.required),
    names: new FormArray([], [Validators.required]),
    pronouces_good: new FormArray([], [Validators.required]),
    pronouces_neutral: new FormArray([], [Validators.required]),
    sexuality: new FormArray([], [Validators.required]),
    links: new FormArray([
      new FormGroup({
      social: new FormControl(''),
      url: new FormControl('')
      }, Validators.required)
    ]),
    selectedWords1: new FormArray([], [Validators.required]),
    selectedWords2: new FormArray([], [Validators.required]),
    selectedWords3: new FormArray([], [Validators.required]),
    selectedWords4: new FormArray([], [Validators.required]),
    s_identity: new FormControl<number>(5, [Validators.required]),
    s_expression: new FormControl<number>(5, [Validators.required]),
    s_orientation: new FormControl<number>(5, [Validators.required]),
    s_drive: new FormControl<number>(5, [Validators.required]),
    s_desire: new FormControl<number>(5, [Validators.required]),
    s_attitude: new FormControl<number>(5, [Validators.required]),
    s_exploration: new FormControl<number>(5, [Validators.required])
  })
  word=''
  names = this.signForm.get("names") as FormArray;
  pronouces_good = this.signForm.get("pronouces_good") as FormArray;
  pronouces_neutral= this.signForm.get("pronouces_neutral") as FormArray;
  sexuality = this.signForm.get("sexuality") as FormArray;
  links = this.signForm.get("links") as FormArray;

  onSubmit(){
    const newPro = new Pronouce(this.signForm.value['message'],
    this.signForm.value['pronouces_good'],
    this.signForm.value['pronouces_neutral'],
    this.signForm.value['names'],
    this.signForm.value['sexuality'],
    this.signForm.value['selectedWords1'],
    this.signForm.value['selectedWords2'],
    this.signForm.value['selectedWords3'],
    this.signForm.value['selectedWords4'],
    // this.signForm.value['s_identity'],
    // this.signForm.value['s_expression'],
    // this.signForm.value['s_orientation'],
    // this.signForm.value['s_drive'],
    // this.signForm.value['s_desire'],
    // this.signForm.value['s_attitude'],
    // this.signForm.value['s_exploration']
    )
    this.pronouceService.addPro(newPro);
    console.log(this.signForm.value)
    this.signForm.reset();
  }

  addName() {
    this.names.push(new FormControl(''));
  }
  removeName(index: number) {
    this.names.removeAt(index);
  }
  addPronouns() {
    this.pronouces_good.push(new FormControl(''));
  }
  removePronouns(index: number) {
    this.pronouces_good.removeAt(index);
  }
  addPronounsN() {
    this.pronouces_neutral.push(new FormControl(''));
  }
  removePronounsN(index: number) {
    this.pronouces_neutral.removeAt(index);
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

  onCheckboxChange1(event: any) {
    const selectedWords1 = (this.signForm.controls['selectedWords1'] as FormArray);
    if (event.target.checked) {
      selectedWords1.push(new FormControl(event.target.value));
    } else {
      const index = selectedWords1.controls
      .findIndex(x => x.value === event.target.value);
      selectedWords1.removeAt(index);
    }
  }
  onCheckboxChange2(event: any) {
    const selectedWords2 = (this.signForm.controls['selectedWords2'] as FormArray);
    if (event.target.checked) {
      selectedWords2.push(new FormControl(event.target.value));
    } else {
      const index = selectedWords2.controls
      .findIndex(x => x.value === event.target.value);
      selectedWords2.removeAt(index);
    }
  }
  onCheckboxChange3(event: any) {
    const selectedWords3 = (this.signForm.controls['selectedWords3'] as FormArray);
    if (event.target.checked) {
      selectedWords3.push(new FormControl(event.target.value));
    } else {
      const index = selectedWords3.controls
      .findIndex(x => x.value === event.target.value);
      selectedWords3.removeAt(index);
    }
  }
  onCheckboxChange4(event: any) {
    const selectedWords4 = (this.signForm.controls['selectedWords4'] as FormArray);
    if (event.target.checked) {
      selectedWords4.push(new FormControl(event.target.value));
    } else {
      const index = selectedWords4.controls
      .findIndex(x => x.value === event.target.value);
      selectedWords4.removeAt(index);
    }
  }

}
