'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('workflow', function () {
  gulp.src('./_dev/sass/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    // .pipe(sourcemaps.write('./')) 

 .pipe(gulp.dest('./assets/css/'))
});

gulp.task('default', function () {
  gulp.watch('./_dev/sass/*.scss', ['workflow']);
});
