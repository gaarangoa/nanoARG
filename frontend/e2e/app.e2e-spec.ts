import { NotybookcityPage } from './app.po';

describe('notybookcity App', function() {
  let page: NotybookcityPage;

  beforeEach(() => {
    page = new NotybookcityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
