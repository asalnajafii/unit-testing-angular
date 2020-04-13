import {TestBed} from '@angular/core/testing';
import {RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

// integration
describe('app component', () => {
  let fixture, component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    fixture.detectChanges();
    expect(de).not.toBeNull();

  });
});
