import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathsPageRoutingModule } from './deaths-routing.module';

import { DeathsPage } from './deaths.page';
import { PipesModule } from '../../pipes/pipes.module' // imported pipes module

@NgModule({
  imports: [
    PipesModule, // included pipes module
    CommonModule,
    FormsModule,
    IonicModule,
    DeathsPageRoutingModule
  ],
  declarations: [DeathsPage]
})
export class DeathsPageModule {}
