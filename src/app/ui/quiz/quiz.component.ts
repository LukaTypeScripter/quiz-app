import {Component, OnInit} from '@angular/core';
import {CampaignService} from "../../services/campaign.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  selectedQuizSection: string = '';
  selectedQuiz: any;

  constructor(private campaignService: CampaignService, private route: ActivatedRoute) {}
  ngOnInit() { this.route.paramMap.subscribe((params) => {
    const section = params.get('section');
    this.selectedQuiz = this.campaignService.getQuiz(section as string);
    console.log(this.selectedQuiz)
  });
  }


}
