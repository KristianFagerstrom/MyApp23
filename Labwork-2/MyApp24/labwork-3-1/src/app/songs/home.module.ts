import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tab2Page } from './tab2.page.htlm';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { homePageRoutingModule } from './tab2-routing.module.ts';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    homePageRoutingModule
  ],
  declarations: [tab2Page]
})
export class homePageModule {}
