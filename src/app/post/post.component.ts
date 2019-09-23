import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() username: string;
@Input() caption: string;
postlikes: number = 0;

postlikesupdate = function(event)
{this.postlikes= event; }

}
