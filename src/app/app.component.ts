import { Component } from '@angular/core';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonalTrelloDashboard';

  constructor(private tasksService: TasksService) {
  }

  showTasks() {
    this.tasksService.getTasksData().subscribe(data => {
      console.log('getUserData() ');
      console.log(data);
    });
  }
}
