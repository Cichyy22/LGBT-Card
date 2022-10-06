import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @ViewChild('f') signupForm: NgForm;
  words_col_1=["[no honorific]", "mx.", "mr.", "ms.", "sir"]
  words_col_2=["person", "dude", "buddy"]
  words_col_3=["husband", "partner", "boyfriend", "girlfriend"]
  words_col_4=[]
  clicked= false

  user ={
    message:'',
    names: [],
    pronouns:[],
    flags:[],
    links: [],
    words: [],
    word:''
    };
    submitted= false

    addName(){
      this.user.names.push(this.signupForm.value.userData.names)
      console.log(this.user.names)
    }
    removeName(i){
      this.user.names.splice(i,1)
    }
    addPronouns(){
      this.user.pronouns.push(this.signupForm.value.userData.pronouns)
      console.log(this.user.pronouns)
    }
    removePronouns(i){
      this.user.pronouns.splice(i,1)
    }

    addFlags(){
      this.user.flags.push(this.signupForm.value.userData.flags)
      console.log(this.user.flags)
    }
    removeFlags(i){
      this.user.flags.splice(i,1)
    }

    addLinks(){
      let link = {
        name: this.signupForm.value.userData.link_name,
        url: this.signupForm.value.userData.link_url
      }
      this.user.links.push(link)
      console.log(this.user.links)
    }
    removeLinks(i){
      this.user.links.splice(i,1)
    }
    onClick(){
      this.clicked =! this.clicked;
    }

    addWords(){
      this.words_col_4.push(this.signupForm.value.userData.word)
    }



  onSubmit(){
    this.submitted=true
    console.log(this.signupForm);
    this.user.message = this.signupForm.value.userData.message
    this.user.names = this.signupForm.value.userData.names
    this.user.pronouns = this.signupForm.value.pronounsr

    this.signupForm.reset()

  }
}
