import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CampaignService } from '../../services/campaign.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public titles$ = this.campaign.$titles.asObservable();
  constructor(private campaign: CampaignService, private router: Router) {}

  ngOnInit() {
    this.campaign.getTitles();
    this.campaign.$selectedQuiz.pipe(map((res) => {})).subscribe();
  }
  ocClickQuiz(quiz: string) {
    this.campaign.getQuiz(quiz);
    if (quiz) {
      this.router.navigate(['quiz', quiz]);
    }
  }
}
