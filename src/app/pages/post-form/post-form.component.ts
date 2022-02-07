import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  statuses: string[] = ['Public', 'Private'];

  constructor() { }

  ngOnInit(): void {
  }

}
