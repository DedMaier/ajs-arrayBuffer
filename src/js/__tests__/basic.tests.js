import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('check class ArrayBufferConverter', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  expect(converter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
