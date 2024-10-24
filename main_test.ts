import { isThirteen } from "./main.ts";
import { assertEquals } from "https://deno.land/std@0.212.0/testing/asserts.ts";

Deno.test("Function may return True when number is 13", () => {
  assertEquals(isThirteen(13), true);
});

Deno.test("Function may return False when number is not 13", () => {
  assertEquals(isThirteen(12), false);
  assertEquals(isThirteen(14), false);
  assertEquals(isThirteen(0), false);
});
