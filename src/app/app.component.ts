import { Component } from '@angular/core';
import { Story } from './models/story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterStoryList: Story[] = [
    new Story('Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.')
  ];
}
