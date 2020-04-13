import {TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {By} from '@angular/platform-browser';
import {RouterLinkWithHref} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

// integration
describe('header', () => {
  let fixture, component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to correct page ', () => {
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let todo = de.findIndex(deb => deb.properties['href'] === '/todo');
    let form = de.findIndex(deb => deb.properties['href'] === '/form');
    let vote = de.findIndex(deb => deb.properties['href'] === '/vote');
    expect(todo).toBeGreaterThan(-1);
    expect(form).toBeGreaterThan(-1);
    expect(vote).toBeGreaterThan(-1);
  });
});
