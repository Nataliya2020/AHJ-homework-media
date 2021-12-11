/**
 * @jest-environment jsdom
 */

import DataForm from '../components/DataForm';

jest.mock('../components/Tooltip');
jest.mock('../components/ErrorModal');

const dataForm = new DataForm();

test.each([
  ['51.50851, -0.12572', {
    coords:
      {
        latitude: '51.50851',
        longitude: '-0.12572',
      },
  }],
  ['51.50851,-0.12572', {
    coords:
      {
        latitude: '51.50851',
        longitude: '-0.12572',
      },
  }],
  ['[51.50851, -0.12572]', {
    coords:
      {
        latitude: '51.50851',
        longitude: '-0.12572',
      },
  }]])(('should return an object with values'), (value, expected) => {
  const result = dataForm.checkInput(value);

  expect(result).toEqual(expected);
});
