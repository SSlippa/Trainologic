import { UlistPage } from './app.po';

describe('ulist App', () => {
  let page: UlistPage;

  beforeEach(() => {
    page = new UlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
