import { Component, OnInit, Input } from '@angular/core';
import { Story } from './../models/story.model';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.css']
})
export class NewsStoriesComponent implements OnInit {
  @Input() childStoryList: Story[];
  constructor() { }

  ngOnInit() {
  }

}
