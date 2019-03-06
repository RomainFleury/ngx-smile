import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxSmileComponent } from './ngx-smile.component';

@NgModule({
  declarations: [NgxSmileComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxSmileComponent]
})
export class NgxSmileModule { }
