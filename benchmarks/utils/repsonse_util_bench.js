import { formatArrayData } from "../../src/utils/response_util.js";

Deno.bench(function formatArrayDataWithSmallArray() {
    formatArrayData(new Array(10));
});

Deno.bench(function formatArrayDataWithLargeArray() {
  formatArrayData(new Array(1_000_000));
});