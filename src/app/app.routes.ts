import { Routes } from '@angular/router';
import {HomeComponent} from "./ui/home/home.component";
import {QuizComponent} from "./ui/quiz/quiz.component";

export const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path: 'quiz/:section', component: QuizComponent
  }
];
