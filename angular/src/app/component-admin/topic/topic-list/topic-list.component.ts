import { Component, OnInit } from '@angular/core';

import { TopicService } from '../../services/topic.service';
import {ActivatedRoute, Params, Router } from '@angular/router';
// import { Router } from '@angular/router/src/router'

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private _topicService: TopicService,
              private route: Router) { }
   private Topic = [];

  ngOnInit() {
    this.getAllTopic();
  }
  getAllTopic(){
  this._topicService
    .showTopic()
    .subscribe(Topic => {
      this.Topic = Topic;
    })
}
}
