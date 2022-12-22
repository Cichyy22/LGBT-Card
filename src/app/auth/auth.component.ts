import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public id: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  onSubmit(){
    console.log("działa")
  }

}
