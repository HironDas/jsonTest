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

gulp.task('default', ['dev', 'inject']);

gulp.task('inject', function() {
    return gulp.src('./test/index.html')
        .pipe(inject(gulp.src(['./dist/**/*.min.js', './test/**/*.css'], { read: false }), { relative: true }))
        .pipe(gulp.dest('./test'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['dev']);
})