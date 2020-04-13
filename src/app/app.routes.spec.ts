import {Route} from './app.routes';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';
import {VoteComponent} from './vote/vote.component';
import {ParentComponent} from './parent/parent.component';

describe('routes', () => {
  it('should contain a route for /home', () => {
    expect(Route).toContain({path: '', component: HomeComponent});
  });

  it('should contain a route for /parent', () => {
    expect(Route).toContain({path: 'parent', component: ParentComponent});
  });

  it('should contain a route for /vote', () => {
    expect(Route).toContain({path: 'vote', component: VoteComponent});
  });


  it('should contain route for /form', () => {
    expect(Route).toContain({path: 'form', component: FormComponent});
  });
});
