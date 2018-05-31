import { ZhouqiPage } from './app.po';

describe('zhouqi App', function() {
  let page: ZhouqiPage;

  beforeEach(() => {
    page = new ZhouqiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
