import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CampaignService} from "../../services/campaign.service";
import {map} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private campaign: CampaignService) {}


ngOnInit() {
this.campaign.getQuizData().pipe(map((res) => {
  console.log(res)
}))
}

}
