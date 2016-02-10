require('es6-promise').polyfill();

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    cmq = require('gulp-combine-media-queries');

gulp.task('sass', function() {
    return gulp.src('./assets/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cmq())
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('transfer', function() {
    gulp.src('./bower_components/include-media/dist/*.scss')
        .pipe(gulp.dest('./assets/scss/vendor'));
    gulp.src('./bower_components/highlight/build/highlight.pack.js')
        .pipe(gulp.dest('./assets/js'));
    gulp.src('./bower_components/highlight/src/styles/monokai-sublime.css')
        .pipe(gulp.dest('./assets/css'));
});