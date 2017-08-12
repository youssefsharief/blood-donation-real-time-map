import { CrossoverPage } from './app.po';

describe('crossover App', () => {
  let page: CrossoverPage;

  beforeEach(() => {
    page = new CrossoverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
