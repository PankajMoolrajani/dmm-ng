import { DmmNgPage } from './app.po';

describe('dmm-ng App', () => {
  let page: DmmNgPage;

  beforeEach(() => {
    page = new DmmNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
