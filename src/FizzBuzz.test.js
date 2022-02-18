import "@testing-library/jest-dom"
import {fizzBuzz} from "./FizzBuzz";

describe("test sur la fonction exporte", () => {

    it("test de retour le nombre passé en paramètre", () => {
      expect(fizzBuzz(1)).toBe("1");
      expect(fizzBuzz(2)).toBe("2");
      expect(fizzBuzz(4)).toBe("4");
      expect(fizzBuzz(7)).toBe("7");
      expect(fizzBuzz(8)).toBe("8");
      expect(fizzBuzz(11)).toBe("11");
    });

    it("test de retour Fizz", () => {
      expect(fizzBuzz(3)).toBe("Fizz");
      expect(fizzBuzz(13)).toBe("Fizz");
      expect(fizzBuzz(31)).toBe("Fizz");
      expect(fizzBuzz(73)).toBe("Fizz");
    });

    it("test de retour Buzz", () => {
      expect(fizzBuzz(5)).toBe("Buzz");
      expect(fizzBuzz(10)).toBe("Buzz");
      expect(fizzBuzz(25)).toBe("Buzz");
      expect(fizzBuzz(58)).toBe("Buzz");
      expect(fizzBuzz(59)).toBe("Buzz");
    });

    it("test de retour FizzBuzz", () => {
      expect(fizzBuzz(15)).toBe("FizzBuzz");
      expect(fizzBuzz(30)).toBe("FizzBuzz");
      expect(fizzBuzz(45)).toBe("FizzBuzz");
      expect(fizzBuzz(53)).toBe("FizzBuzz");
    });
  });
