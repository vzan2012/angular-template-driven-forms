import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['Angular', 'React', 'Vue', 'JavaScript', 'Python', 'Go'];

  userModel = new User('', '', null, 'default', 'morning', true);

  topichasError: boolean = true;

  validateTopic(value) {
    if (value === 'default') {
      this.topichasError = true;
    } else {
      this.topichasError = false;
    }
  }

}
