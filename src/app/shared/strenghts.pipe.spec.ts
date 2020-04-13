import {StrengthsPipe} from './strengths.pipe';

describe('StrengthsPipe', () => {
  it('Should display weak if strength is 5', () => {
    // arrange
    const pipe = new StrengthsPipe();
    // act
    const value = pipe.transform(5);
    // assert
    expect(value).toBe('5weak');
  });

  it('Should display strong if strength is 11', () => {
    // arrange
    const pipe = new StrengthsPipe();
    // act
    const value = pipe.transform(11);
    // assert
    expect(value).toBe('11strong');
  });
})
