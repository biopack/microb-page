"use strict";
const microb_1 = require("microb");
const appRoot = require("app-root-path");
let env = new microb_1.Environment();
env.set("environment", process.env.MICROB_ENVIRONMENT || "dev");
env.set("debug", true);
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
    "cellpack-swig": {
        globals: {
            usecdn: true
        }
    }
};
env.set("cellpacks", cellpacks);
module.exports = env;
