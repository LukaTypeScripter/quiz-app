import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  correctAnswers!:number
  @Input() set correctAnswer(val:number) {
    if(val) {
      this.correctAnswers = val
    }
  }
}
