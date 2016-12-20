"use strict";
const cellpack_controller_1 = require("cellpack-controller");
class DefaultController extends cellpack_controller_1.Controller {
    homepage(connection) {
        console.log("HOMEPAGE INVOKED!");
        let response = this.render("index.html", {
            request: connection.request
        });
        return response;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DefaultController;
