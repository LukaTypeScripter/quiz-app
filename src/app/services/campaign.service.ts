import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {data} from "../../datas";
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private  http:HttpClient) { }

  getQuizData() {
    return data;
  }
}
