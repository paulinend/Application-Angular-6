import { PagenotfoundModule } from './pagenotfound.module';

describe('PagenotfoundModule', () => {
  let pagenotfoundModule: PagenotfoundModule;

  beforeEach(() => {
    pagenotfoundModule = new PagenotfoundModule();
  });

  it('should create an instance', () => {
    expect(pagenotfoundModule).toBeTruthy();
  });
});
