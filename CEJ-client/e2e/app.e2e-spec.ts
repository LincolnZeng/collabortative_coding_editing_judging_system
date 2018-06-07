import { CEJClientPage } from './app.po';

describe('cej-client App', function() {
  let page: CEJClientPage;

  beforeEach(() => {
    page = new CEJClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
