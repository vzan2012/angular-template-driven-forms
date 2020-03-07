import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['Angular', 'React', 'Vue', 'JavaScript', 'Python', 'Go'];

  userModel = new User('ABCD', 'abcd@gmail.com', 1234567890, 'React', 'morning', true);

}
