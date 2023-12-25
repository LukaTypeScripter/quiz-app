import {Component, Input} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {CampaignService} from "../../../services/campaign.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  correctAnswers!:number
  public selectedQuiz$ = this.capmpain.$selectedQuiz.asObservable()
  public isOnQuiz = this.capmpain.$isOnQuiz.asObservable()
  constructor(private capmpain:CampaignService ) {
  }
  @Input() set correctAnswer(val:number) {
    if(val) {
      this.correctAnswers = val
      console.log(val)
    }
  }
}
