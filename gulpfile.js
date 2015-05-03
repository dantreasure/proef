//TODO: Figure out how to selectively push dist to heroku

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat-util'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber')
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    cssfont64 = require('gulp-cssfont64'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('html', function(){
    gulp.src(['public/partials/**/*']).pipe(gulp.dest('dist/partials'))
    gulp.src('public/index.html').pipe(gulp.dest('dist/'))
    gulp.src(['public/partials/*.html']).pipe(livereload());
});

gulp.task('styles', function() {
  return gulp.src('public/styles/**/*.sass')
    .pipe(sass({
        style: 'expanded',
        errLogToConsole: true,
        indentedSyntax: true
    }))
    .pipe(concat('style.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src(['public/js/app.js', 'public/js/**/*.js'])
    .pipe(plumber())
    .pipe(concat('main.js', {process: function(src) { return (src.trim() + '\n').replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1'); }}))
    .pipe(concat.header('(function(window, document, undefined) {\n\'use strict\';\n'))
    .pipe(concat.footer('\n})(window, document);\n'))
    .pipe(ngAnnotate())
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('public/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'))
    .pipe(livereload())
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/img', 'dist/fonts'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('html', 'styles', 'scripts', 'images');
});

gulp.task('watch', function() {

    gulp.watch('public/**/*.html', ['html']);

    gulp.watch('public/styles/**/*.sass', ['styles']);

    gulp.watch('public/js/**/*.js', ['scripts']);

    gulp.watch('src/images/**/*', ['images']);

    livereload.listen();

});
