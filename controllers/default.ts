
import { Controller } from "cellpack-controller"
import { Connection, Response } from "microb" // Response needed : https://github.com/Microsoft/TypeScript/issues/9944

export default class DefaultController extends Controller {

    homepage(connection: Connection){
        console.log("HOMEPAGE INVOKED!")

        

        let response = this.render("index.html",{
            request: connection.request
        })

        return response
    }

}
