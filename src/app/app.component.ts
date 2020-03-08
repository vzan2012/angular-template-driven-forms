import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['Angular', 'React', 'Vue', 'JavaScript', 'Python', 'Go'];

  userModel = new User('', '', null, 'default', 'morning', true);

  topichasError: boolean = true;

  submitted: boolean = false;

  errorMessage = '';
  dataSuccess = false;

  constructor(private _enrollmentService: EnrollmentService) { }

  validateTopic(value) {
    if (value === 'default') {
      this.topichasError = true;
    } else {
      this.topichasError = false;
    }
  }

  onSubmit() {
    // console.log(this.userModel)
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => { console.log('Success!', data); this.dataSuccess = true; },
      error => this.errorMessage = error
    )

  }

}
