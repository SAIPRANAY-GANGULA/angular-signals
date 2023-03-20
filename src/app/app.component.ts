import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <p>Search string: {{ search }}</p>
    <input type="text" (input)="setSearchString($event)" />
    <hr />
    <p *ngFor="let user of filteredUsers">{{ user.id }}. {{ user.name }}</p>
    <hr />
    <button (click)="addUser()">Add Random User</button>`,
})
export class AppComponent implements OnInit {
  search = '';
  filteredUsers: Array<{ id: number; name: string }> = [];
  private users = [
    { id: 1, name: 'Sai' },
    { id: 2, name: 'Pranay' },
    { id: 3, name: 'Gangula' },
  ];

  ngOnInit(): void {
    this.filteredUsers = this.users;
  }

  setSearchString(e: Event): void {
    this.search = (e.target as HTMLInputElement).value;
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().startsWith(this.search.toLowerCase())
    );
  }

  addUser(): void {
    this.users = [
      ...this.users,
      { id: this.users.length + 1, name: 'Ankitha' },
    ];
    this.filteredUsers = this.users;
  }
}
