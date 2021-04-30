import { Pokemon } from "./index";

describe("Battle", () => {
  let p1 = new Pokemon("Pika",10,10,10,25);
  let p2 = new Pokemon("Bulbi",15,10,10,20);
  describe("When I'm unlucky", () => {
    it("should return p2 when he's faster", () => {
      expect(p1.Battle(p2)).toBe(p2);
    });
  });
});
