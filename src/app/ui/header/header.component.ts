import { Component } from '@angular/core';
import {CampaignService} from "../../services/campaign.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {map} from "rxjs";
import {Quiz} from "../../shared/models/quiz";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isLightTheme = true;
  public selectedQuiz$ = this.campaign.$selectedQuiz.asObservable()
    public isOnQuiz = this.campaign.$isOnQuiz.asObservable()
  constructor(private campaign:CampaignService) {
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;
    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

}
