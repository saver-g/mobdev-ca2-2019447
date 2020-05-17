// Source: https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c

import { NgModule } from '@angular/core';
import { QuotefilterPipe } from './quotefilter.pipe';
import { DeathfilterPipe } from './deathfilter.pipe';

@NgModule({
  declarations: [QuotefilterPipe, DeathfilterPipe],
  exports: [ QuotefilterPipe, DeathfilterPipe]
})

export class PipesModule { }
