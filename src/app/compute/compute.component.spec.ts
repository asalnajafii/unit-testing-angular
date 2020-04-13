import {ComputeComponent} from './compute.component';
// unit test

describe('ComputeComponent', () => {
  it('should return zero if we have negative number', () => {
    // Arrange
    const component = new ComputeComponent();
    // ACT
    const res = component.compute(-1);
    // Asserts
    expect(res).toBe(0);
  });
  it('should return +1 if we have number greater than zero', () => {
    const component = new ComputeComponent();
    const res = component.compute(2);
    expect(res).toBe(3);
  });
  it('should include name in message', () => {
    const component = new ComputeComponent();
    expect(component.greet('asal')).toContain('asal');
  });
  it('should return supported currency', () => {
    const component = new ComputeComponent();
    const res = component.getCurrencies();
    expect(res).toContain('USD');
    expect(res).toContain('AUD');
    expect(res).toContain('EUR');
  });
});
