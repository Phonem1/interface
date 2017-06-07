import { Interface1Page } from './app.po';

describe('interface1 App', () => {
  let page: Interface1Page;

  beforeEach(() => {
    page = new Interface1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
