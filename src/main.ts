import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // ngZone: 'noop', // CD doesn't work if we disable Zone.js
    // Currently, signals work in the context of ZoneJs. A new CD mechanism will come in a bit later.
  })
  .catch((err) => console.error(err));
