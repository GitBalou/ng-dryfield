// import css (webpack handles it)
require('./style/style.css');

// bootstrap angular to index.html
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
