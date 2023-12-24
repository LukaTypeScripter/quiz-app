import {Component, OnInit} from '@angular/core';
import {CampaignService} from "../../services/campaign.service";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Quiz} from "../../shared/models/quiz";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    NgClass,

  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  selectedQuiz!: Quiz | undefined;
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  showResult: boolean = false;
  isAnswerCorrect: boolean | null = null;
  progressWidth:number = 1
  activeAnswer!:number
  isChosen!:boolean
  correctAnswerIndex!:number | null
  correctAnswersCount:number = 0
  isDissabled:boolean = false
  //TODO show user which one answer is correct and which is not!
  constructor(private campaignService: CampaignService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section');
      this.selectedQuiz = this.campaignService.getQuiz(section as string);
    });
  }
  get currentQuestion(): any | null {
    return this.selectedQuiz?.questions[this.currentQuestionIndex] || null;
  }
    private getProgressWidth(points:number) {
      points = Math.min(points,10);
      points = Math.floor(points)
      this.progressWidth = (points / 10) *100
    }
  handleAnswer(selectedOption: string,i:number): void {
      this.activeAnswer = i
    this.selectedAnswer = selectedOption;
      this.isChosen = true

  }

  submitAnswer(): void {
    this.isDissabled = true
    if (this.selectedAnswer !== null && this.isDissabled) {
      this.showResult = true;
      this.isAnswerCorrect = this.selectedAnswer === this.currentQuestion?.answer;
      this.selectedAnswer = null
      this.correctAnswerIndex = this.currentQuestion?.options.findIndex(
        (option:string[]) => option === this.currentQuestion?.answer
      );
      this.isDissabled = false
      console.log(this.currentQuestion.options)
      if (this.isAnswerCorrect) {
        this.correctAnswersCount++;
        console.log(this.correctAnswersCount)
      }
      setTimeout(() => {
        this.currentQuestionIndex++
        this.getProgressWidth(this.currentQuestionIndex)
        this.isAnswerCorrect = null;
        this.showResult = false
        this.isChosen = false
        this.correctAnswerIndex = null;
      },2000)

    }
  }

}
