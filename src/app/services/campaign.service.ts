import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {data} from "../../datas";
import {BehaviorSubject, filter} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private  http:HttpClient) { }
  public $titles = new BehaviorSubject<any>([])
  getQuizData() {
    return data;
  }
  getTitles() {
    const combinedData = data.quizzes.map((res) => ({
      title: res.title,
      icon: res.icon
    }));

    this.$titles.next(combinedData);
  }
}
