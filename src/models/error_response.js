import { status } from "../enums/mod.js";

class ErrorResponse {
    status;
    code;
    message;

    constructor(code, message) {
        this.status = status.Error;
        this.code = code;
        this.message = message;
    }
}

export { ErrorResponse };