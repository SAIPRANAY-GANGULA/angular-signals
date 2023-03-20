import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <p>Search string: {{ search }}</p>
    <input type="text" (input)="setSearchString($event)" />
    <hr />
    <ul>
      <li *ngFor="let user of filteredUsers">{{ user.name }}</li>
    </ul>
    <hr />
    <button (click)="addUser()">Add Random User</button>`,
})
export class AppComponent {
  search = '';
  users = [
    { id: 1, name: 'Sai' },
    { id: 2, name: 'Pranay' },
    { id: 3, name: 'Gangula' },
  ];

  filteredUsers = this.users;

  setSearchString(e: Event) {
    this.search = (e.target as HTMLInputElement).value;
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().startsWith(this.search.toLowerCase())
    );
  }

  addUser() {
    this.users = [...this.users, { id: 3, name: 'John' }];
  }
}
