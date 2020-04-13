import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  public totalVotes = 0;
  public otherVotes = 2;
  public myVote = 1;

  public votesChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.totalVotes = this.myVote + this.otherVotes;
  }

  upVote() {
    this.totalVotes++;
    this.votesChanged.emit(this.totalVotes);
  }

  downVote() {
    this.totalVotes--;
  }
}
