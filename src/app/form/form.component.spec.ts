import {FormComponent} from './form.component';
import {FormBuilder} from '@angular/forms';
// unit test
describe('FormComponent', () => {
  var component: FormComponent;
  beforeEach(() => {
    component = new FormComponent(new FormBuilder());
  });
  it('should create a form with two controls', () => {
    expect(component.testForm.contains('userName')).toBeTruthy();
    expect(component.testForm.contains('email')).toBeTruthy();
  });
  it('should make the userName control required', () => {
    const control = component.testForm.get('userName');
    // set it empty :)
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should make the email control required', () => {
    const control = component.testForm.get('email');
    // set it empty :)
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

});
