//How is this minimum bruh JS is complicated for no reason lmaoooo

import { getMessage } from '../hello';

test('has default message', () => {
  const message = getMessage();
  expect(message).toEqual('Welcome to your Node.js server, built with minimal dependencies.');
});
