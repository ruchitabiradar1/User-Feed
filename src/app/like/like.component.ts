import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
 @Input() nooflikes: number;

 @Output()
 change: EventEmitter<number> = new EventEmitter<number>();

 likeButtonClick()
 {this.nooflikes++;
 this.change.emit(this.nooflikes);
 }

 dislikeButtonClick()
 {this.nooflikes--;
  this.change.emit(this.nooflikes);
}
}
