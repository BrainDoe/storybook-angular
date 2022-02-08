import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  statuses: string[] = ['Public', 'Private'];
  inputValue: string = '';
  preview: string = '';
  desc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.inputValue = value;
  }
  onPreview(value: string) {
    this.preview = value;
  }
  onContent(value: string) {
    this.desc = value;
  }

}
