import { AngularPwaPage } from './app.po';

describe('angular-pwa App', function() {
  let page: AngularPwaPage;

  beforeEach(() => {
    page = new AngularPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
