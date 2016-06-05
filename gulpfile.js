var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concatJs = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    sourcemaps = require("gulp-sourcemaps");
 
gulp.task('concatCssLib', function () {
  return gulp.src('css/lib/*.css')
    .pipe(concatCss("vendor.css"))
    .pipe(minifyCSS())
    .pipe(rename('vendor.min.css'))
    .pipe(gulp.dest('gulp/css/lib'));
});

gulp.task('minifyCssCustom', function () {
  return gulp.src('css/custom/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('gulp/css/custom'));
});

gulp.task("concatJsLib", function () {
    return gulp.src(["js/libs/angular.min.js", "js/libs/jquery-1.10.2.js", "js/libs/bootstrap.js", "js/libs/less.min.js"])
          .pipe(concatJs("vendor.js"))
        .pipe(gulp.dest("gulp/concatJsLib"));
});

gulp.task("concatJsApp", function () {
    return gulp.src(["js/*.js", "js/controllers/*.js", "js/services/*.js"])
        .pipe(sourcemaps.init())
        .pipe(concatJs( "app.js"))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest("gulp/concatJsApp"));
});
