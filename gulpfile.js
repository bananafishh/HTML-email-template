var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat-util'),
    inlineCss = require('gulp-inline-css');


gulp.task('styles', function() {
	return gulp.src('./src/styles/main.styl')
		.pipe(stylus())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist/styles/'));
});


gulp.task('html', function() {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist/'))
});


gulp.task('inline-css', function() {
	 return gulp.src('./dist/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./inline/'));
});


gulp.task('default', ['styles','html'], function() {

});


gulp.task('watch', function() {
	gulp.watch('./src/styles/**/*.styl', ['styles']);
	gulp.watch('./src/*.html', ['html']);
});