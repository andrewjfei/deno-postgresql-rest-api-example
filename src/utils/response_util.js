import { ErrorResponse } from "../models/mod.js";

function formatArrayData(array) {
  return {
    length: array.length,
    data: array,
  };
}

function buildErrorResponse(code, message) {
  return new ErrorResponse(code, message);
}

export { formatArrayData , buildErrorResponse };