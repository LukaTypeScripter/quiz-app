import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../shared/models/quiz';
import { ScoreComponent } from './score/score.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf, NgClass, NgStyle, ScoreComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  selectedQuiz!: Quiz | undefined;
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  showResult: boolean = false;
  isAnswerCorrect: boolean | null = null;
  progressWidth: number = 10;
  activeAnswer!: number | null;
  isChosen!: boolean | undefined;
  correctAnswerIndex!: number | null;
  correctAnswersCount: number = 0;
  showCorrectAnswer!: boolean;
  isAnswered!: boolean;
  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section');
      this.selectedQuiz = this.campaignService.getQuiz(section as string);
    });
  }

  get currentQuestion(): any | null {
    return this.selectedQuiz?.questions[this.currentQuestionIndex] || null;
  }
  private getProgressWidth(points: number) {
    points = Math.min(points, 10);
    points = Math.floor(points);
    this.progressWidth = (points / 10) * 100;
  }
  handleAnswer(selectedOption: string, i: number): void {
    this.activeAnswer = i;
    this.selectedAnswer = selectedOption;
    this.isChosen = true;
  }

  submitAnswer(): void {
    if (this.selectedAnswer !== null) {
      this.showResult = true;
      this.isAnswerCorrect =
        this.selectedAnswer === this.currentQuestion?.answer;
      this.selectedAnswer = null;
      this.correctAnswerIndex = this.currentQuestion?.options.findIndex(
        (option: string[]) => option === this.currentQuestion?.answer
      );
      this.isAnswered = true;
      this.showCorrectAnswer = !this.isAnswerCorrect;
      if (this.isAnswerCorrect) {
        this.correctAnswersCount++;
      }
      setTimeout(() => {
        this.currentQuestionIndex++;
        this.getProgressWidth(this.currentQuestionIndex);
        this.isAnswerCorrect = null;
        this.showResult = false;
        this.isChosen = undefined;
        this.correctAnswerIndex = null;
        this.isAnswered = false;
        this.activeAnswer = null;
      }, 2000);
    }
  }
}
