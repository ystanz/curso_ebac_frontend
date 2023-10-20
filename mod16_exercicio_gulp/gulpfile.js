const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function sassCompile() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function imgCompress() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function jsCompress () {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

exports.default = function () {
    gulp.watch('./source/styles/*.scss', {IgnoreInitial: false}, gulp.series(sassCompile)); 
    gulp.watch('./source/images/*', {IgnoreInitial: false}, gulp.series(imgCompress));
    gulp.watch('./source/scripts/*.js', {IgnoreInital: false}, gulp.series(jsCompress));
}