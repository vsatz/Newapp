import { NgModule } from '@angular/core';
import { MomentPipe } from './moment.pipe';

@NgModule({
  imports: [],
  declarations: [MomentPipe, ],
  providers: [MomentPipe, ],
  exports: [MomentPipe, ],
})
export class DatetimeModule { }
