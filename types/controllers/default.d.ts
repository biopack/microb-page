import { Controller } from "cellpack-controller";
import { Connection, Response } from "microb";
export default class DefaultController extends Controller {
    homepage(connection: Connection): Response;
}
