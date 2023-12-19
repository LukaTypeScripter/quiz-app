import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private  http:HttpClient) { }

  getQuizData() {
    return this.http.get('./data.json')
  }
}
