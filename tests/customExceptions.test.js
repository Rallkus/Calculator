import {NoCalculatorFunctionNameError,AccessDeniedError} from '../src/customExceptions';

it('NoCalculatorFunctionNameError constructor', () => {
    const ceNo = new NoCalculatorFunctionNameError();
    expect(ceNo.name).toBe('NoCalculatorFunctionName');
  });

it('AccessDeniedError constructor', () => {
    const ceNo = new AccessDeniedError();
    expect(ceNo.name).toBe('AccessDeniedName');
  });
    