import { AngularGitPage } from './app.po';

describe('angular-git App', () => {
  let page: AngularGitPage;

  beforeEach(() => {
    page = new AngularGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
