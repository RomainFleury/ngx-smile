import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgxSmileComponent } from './ngx-smile.component';

@NgModule({
  declarations: [NgxSmileComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [NgxSmileComponent]
})
export class NgxSmileModule { }
