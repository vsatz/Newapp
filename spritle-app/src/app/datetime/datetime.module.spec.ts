import { DatetimeModule } from './datetime.module';

describe('DatetimeModule', () => {
  let datetimeModule: DatetimeModule;

  beforeEach(() => {
    datetimeModule = new DatetimeModule();
  });

  it('should create an instance', () => {
    expect(datetimeModule).toBeTruthy();
  });
});
