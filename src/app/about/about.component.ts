import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  links: {name: string, link: string}[]=[
    {'name': 'Facebook', 'link': 'https://www.facebook.com/profile.php?id=100010863060239'},
    {'name': 'Twitter', 'link': 'https://twitter.com/home'}
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
