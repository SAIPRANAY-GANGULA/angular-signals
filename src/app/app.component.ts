import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Search string: {{ search() }}</p>
    <input type="text" (input)="setSearchString($event)" />
    <p *ngFor="let user of filteredUsers()">{{ user.id }}. {{ user.name }}</p>
    <button (click)="addUser()">Add Random User</button>
    <app-rxjs-vs-signals></app-rxjs-vs-signals>
    <app-signals-in-depth></app-signals-in-depth>
  `,
})
export class AppComponent {
  search = signal('');
  filteredUsers = computed(() =>
    this.users().filter((user) =>
      user.name.toLowerCase().startsWith(this.search().toLowerCase())
    )
  );
  private users = signal([
    { id: 1, name: 'Sai' },
    { id: 2, name: 'Pranay' },
    { id: 3, name: 'Gangula' },
  ]);

  setSearchString(e: Event): void {
    this.search.set((e.target as HTMLInputElement).value);
  }

  addUser(): void {
    this.users.update((users) => [
      ...users,
      { id: this.users().length + 1, name: 'Ankitha' },
    ]);
  }
}
