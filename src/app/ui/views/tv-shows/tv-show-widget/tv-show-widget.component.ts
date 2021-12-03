import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/core/models';

@Component({
  selector: 'app-tv-show-widget',
  templateUrl: './tv-show-widget.component.html',
  styleUrls: ['./tv-show-widget.component.css']
})
export class TvShowWidgetComponent implements OnInit {
  @Input() tvShow: TvShow|any;

  constructor() { }

  ngOnInit(): void {
  }

}
