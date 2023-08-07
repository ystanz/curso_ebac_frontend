const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function sassCompile () {
    return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/styles'))
}

exports.default = function () {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(sassCompile));
}