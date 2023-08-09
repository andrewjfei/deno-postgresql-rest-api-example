class QueryResult {
    status;
    rows;
    error;

    // constructor for query result model
    constructor(status, rows, error) {
        this.status = status;
        this.rows = rows;
        this.error = error;
    }
}

export { QueryResult };