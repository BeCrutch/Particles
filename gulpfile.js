let gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('sass', function () {
   return gulp.src('assets/scss/style.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(cssmin())
       .pipe(rename('style.min.css'))
       .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
});
