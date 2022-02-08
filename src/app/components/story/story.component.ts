import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

}
