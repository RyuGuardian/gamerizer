var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concatCSS = require('gulp-concat-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(concatCSS('stylesheet.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);