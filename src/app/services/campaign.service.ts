import { Injectable } from '@angular/core';
import {data} from "../../datas";
import {BehaviorSubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  public $titles = new BehaviorSubject<any>([])
  public $selectedQuiz = new BehaviorSubject<any>(null);
  getTitles() {
    const combinedData = data.quizzes.map((res) => ({
      title: res.title,
      icon: res.icon
    }));
    this.$titles.next(combinedData);
  }
  getQuiz(section:string) {
    const selectedQuiz  =  data.quizzes.find((quiz) => quiz.title.toLowerCase() === section.toLowerCase());
    console.log(section)
    this.$selectedQuiz.next(selectedQuiz)
    return selectedQuiz
  }
}
