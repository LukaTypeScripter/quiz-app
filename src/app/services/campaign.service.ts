import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { data } from '../../datas';
import { BehaviorSubject } from 'rxjs';
import { Quiz, QuizTitles } from '../shared/models/quiz';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  public $titles = new BehaviorSubject<QuizTitles[]>([]);
  public $selectedQuiz = new BehaviorSubject<Quiz | undefined>(undefined);
  public $isOnQuiz = new BehaviorSubject<boolean>(false)
    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        if (isPlatformBrowser(this.platformId)) {
            const isOnQuizFromStorage = localStorage.getItem('isOnQuiz');
            if (isOnQuizFromStorage !== null) {
                this.$isOnQuiz.next(JSON.parse(isOnQuizFromStorage));
            }
        }
    }
  getTitles() {
    const combinedData = data.quizzes.map((res) => ({
      title: res.title,
      icon: res.icon,
    }));
    this.$titles.next(combinedData);
  }
  getQuiz(section: string) {
    const selectedQuiz = data.quizzes.find(
      (quiz) => quiz.title.toLowerCase() === section.toLowerCase()
    );
    this.$selectedQuiz.next(selectedQuiz);
      if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('isOnQuiz', JSON.stringify(true));
      }
    return selectedQuiz;
  }
}
