var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var inject = require('gulp-inject');

var minConfig = require('./minconfig.json');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('dev', function() {
    return tsProject.src()
        .pipe(sourcemap.init())
        .pipe(tsProject())
        .js
        .pipe(minify(minConfig))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['dev']);

gulp.watch('dist/**/*.ts', ['dev']);