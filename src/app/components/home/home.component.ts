import { Component, OnInit } from '@angular/core';
import { singleQuery } from '../../models/bl.models';

@Component({
  selector: 'bl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  queries: singleQuery[] = [
    {
      parameter: 'showOnWelcomePage',
      value: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
