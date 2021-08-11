import { isWord } from './is-word.js';

describe('isWord checks if a given string contains only letters', () => {
  describe('check string with only letter', () => {
    it('string with Lowercase letter', () => {
      const actual = isWord('CHOCOLATE');
      expect(actual).toEqual(true);
    });
    it('string with uppercase letters', () => {
      const actual = isWord('chocolate');
      expect(actual).toEqual(true);
    });
    it('string with uppercase and lowercase letter', () => {
      const actual = isWord('ChOcOLaTe');
      expect(actual).toEqual(true);
    });
  });
  describe('check string with multiple characters', () => {
    it('strings with uppercase letters and whole numbers', () => {
      const actual = isWord('Ch0c0LaT3');
      expect(actual).toEqual(false);
    });
    it('string with lowercase letters and decimal numbers', () => {
      const actual = isWord('35.50euros');
      expect(actual).toEqual(false);
    });
    it('string with lowercase letters and symbol', () => {
      const actual = isWord('chocol@te');
      expect(actual).toEqual(false);
    });
    it('string with letters and punctuation', () => {
      const actual = isWord('Chocolate!');
      expect(actual).toEqual(false);
    });
  });

  describe('check for emptiness and whitespace', () => {
    it('string is empty', () => {
      const actual = isWord();
      expect(actual).toEqual(false);
    });
    it('string with whitespace', () => {
      const actual = isWord('Chocolate lover');
      expect(actual).toEqual(false);
    });
  });
});
