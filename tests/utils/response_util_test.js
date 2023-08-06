import { assertEquals, assert } from "https://deno.land/std@0.196.0/assert/mod.ts";
import { formatArrayData } from "../../src/utils/response_util.js";

Deno.test(function formatArrayDataContainsCorrectArrayLength() {
  // given
  const length = 10;
  const array = new Array(length).fill(0);

  // when
  const responseBody = formatArrayData(array);

  // then
  assert(responseBody.length) // assert(true)
  assert(responseBody.data)
  assertEquals(responseBody.length, length); // assertEquals(actual, expected)

  array.forEach((element, index) => {
    assertEquals(responseBody.data[index], element);
  })
});