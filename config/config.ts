import { Environment } from "microb"
import * as appRoot from "app-root-path"

let env = new Environment()

env.set("environment",process.env.MICROB_ENVIRONMENT || "dev")

env.set("debug",true)

let cellpacks = {
    "cellpack-restify": {
        port: 15000
    },
    "cellpack-router": {
        "routes": require(`${appRoot}/config/routes.json`)
    },
    "cellpack-session": {
        "name": "sid",
        "expires": 1800,
        "store": {
            "type": "memcached",
            "options": {
                "server": "localhost"
            }
        }
    },
    "cellpack-controller": {},
    "cellpack-i18n": {
        "defaultLocale": "en"
    },
    "cellpack-swig": {
        globals: {
            usecdn: true
        }
    }
}

env.set("cellpacks",cellpacks)

export = env
