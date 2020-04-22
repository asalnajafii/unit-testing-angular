import {ChildComponent} from './child.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';

class RouterSub {
  navigate(params) {
  }
}

describe('child component', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
      providers: [
        {provide: Router, useClass: RouterSub},
      ]
    });
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
  });


  it('should redirect when click detail button', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const de = fixture.debugElement.query(By.css('.redirect'));
    de.triggerEventHandler('click', component.redirectPage(1));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(['parent', 1]);
  });

});



