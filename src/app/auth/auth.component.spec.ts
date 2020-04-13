import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormBuilder} from '@angular/forms';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let mockUser;
  beforeEach(async(() => {
    mockUser = {
      email: 'hessam@gmail.com', pass: '123'
    };
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
  }));
  it('find user in list', () => {
    const myUser = {value: {email: 'aasal_n@yahoo.com', pass: '123'}};
    component.loginSystem(myUser);
    fixture.detectChanges();
    expect( component.user).toBeTruthy();
  });
  it('set local storage', () => {
    const value = {email: 'hey@gamil.com', pass: '123'};
    component.localStorageSetting(value);
    const localStorageData = localStorage.getItem('user');
    fixture.detectChanges();
    expect(localStorageData).toContain('hey@gamil.com');
  });
});
