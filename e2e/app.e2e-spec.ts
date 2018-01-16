import { SchoolAppPage } from './app.po';

describe('school-app App', function() {
  let page: SchoolAppPage;

  beforeEach(() => {
    page = new SchoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
