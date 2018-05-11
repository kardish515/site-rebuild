import { Component, OnInit} from '@angular/core';
import { Story } from './../models/story.model';
import { StoryService } from '../story.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.css'],
  providers: [StoryService]
})
export class NewsStoriesComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;
  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.stories = this.storyService.getStories();
  }

}
