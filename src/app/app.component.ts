import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Administrate';

  adminAuthorisation : boolean = false;

  logAdmin() {
    this.adminAuthorisation = !this.adminAuthorisation;
  }
}
