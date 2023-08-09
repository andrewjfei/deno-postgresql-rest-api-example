import { QueryResult } from "../models/mod.js"
import { status } from "../enums/mod.js"

function buildSuccessQueryResult(rows) {
    return new QueryResult(status.Success, rows, null);
}

function buildErrorQueryResult(error) {
    return new QueryResult(status.Error, null, error);
}

export { buildSuccessQueryResult, buildErrorQueryResult };