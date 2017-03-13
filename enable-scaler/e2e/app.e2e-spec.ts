import { EnableScalerPage } from './app.po';

describe('enable-scaler App', function() {
  let page: EnableScalerPage;

  beforeEach(() => {
    page = new EnableScalerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
