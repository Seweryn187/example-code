import { CheckIfHaveValuePipe } from './check-if-have-value.pipe';

describe('CheckIfHaveValuePipe', () => {
  const pipe = new CheckIfHaveValuePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return value if value is not a N/A', () => {
    expect(pipe.transform('correct information')).toBe('correct information');
  });

  it('should return "There is no information" when value is N/A', () => {
    expect(pipe.transform('N/A')).toBe('There is no information');
  });
});
