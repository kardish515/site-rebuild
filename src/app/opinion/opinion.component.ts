import { Component, OnInit } from '@angular/core';
import { Story } from './../models/story.model';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  opinions: Story[] = [
    new Story('Why Gina Haspel Is the Best Choice for C.I.A. Director', 'JOHN SIPHER', 'She has the integrity and experience to stand up to a post-truth White House.'),
    new Story('How to Be a Prophet of Doom', 'ALISON McQUEEN', 'We could use a new graphic reminder of what nuclear war would mean for humanity.'),
    new Story('Is the United States Too Big to Govern?', 'NEIL GROSS', 'So many people. Such a complex society. Perhaps we have become unmanageable.')
  ];
  constructor() { }

  ngOnInit() {
  }

}
