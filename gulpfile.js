'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const child = require('child_process');
const gutil = require('gulp-util');

const cssFiles = './_dev/sass/*.scss'

gulp.task('css_workflow', () => {
  gulp.src(cssFiles)
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

gulp.task('watch', () => {
  gulp.watch(cssFiles, ['css_workflow']);
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
    ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' +message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('default', ['css_workflow', 'jekyll', 'watch']);
