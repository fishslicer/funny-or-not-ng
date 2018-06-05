import { Component, OnInit } from '@angular/core';
import { MediaObject } from '../media-object';
import { MEDIA_OBJECTS } from '../mock-media-objects';

@Component({
  selector: 'app-funny',
  templateUrl: './funny.component.html',
  styleUrls: ['./funny.component.scss']
})
export class FunnyComponent implements OnInit {

  mediaObjects = MEDIA_OBJECTS

  selectedMediaObject: MediaObject;
  
  onSelect(mediaObject: MediaObject): void {
    this.selectedMediaObject = mediaObject;
  }

  upVote(curObject: MediaObject): void {
    curObject.upVotes++;
  }

  downVote(curObject: MediaObject): void {
    curObject.downVotes++;
  }

  constructor() { }

  ngOnInit() {
    this.selectedMediaObject = this.mediaObjects[0];
  }

}
