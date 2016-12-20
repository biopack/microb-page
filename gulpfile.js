
const appRoot = require("app-root-path")
const Gulp = require("gulp")
const GulpTypescript = require("gulp-typescript")
const Merge = require("merge2")

let TsProject = GulpTypescript.createProject("tsconfig.json")

Gulp.task("compile", () => {
    let res = TsProject.src()
        .pipe(TsProject());
    return Merge([
        res.js.pipe(Gulp.dest("lib")),
        res.dts.pipe(Gulp.dest("types"))
    ])
})

Gulp.task("watch", () => {
    return Gulp.watch("controllers/**/*", ["compile"])
})

// IMPORTANT DEPLOY SECTION

const cacheDir = `${appRoot}/.cache`
const webDir = `${appRoot}/web`

Gulp.task("prepareEnvironemt", () => {

})
Gulp.task("prepareTemplates", ["prepareEnvironemt"], () => {
    return Gulp.src(`${appRoot}/templates/**/*.html`)
        .pipe(Gulp.dest(`${cacheDir}/templates`))
})
Gulp.task("deploy", ["compile", "prepareTemplates"], () => {

})
// IMPORTANT DEPLOY SECTION - END

Gulp.task("default", ["compile"])
