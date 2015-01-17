var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var ngAnnotate = require('gulp-ng-annotate');

var sourceFiles = [
    './worldcup.js',
    './matches.svc.js',
    ];

gulp.task('concat', function() {
  gulp.src(sourceFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('minify', function () {
    gulp.src(sourceFiles)
    .pipe(ngAnnotate())
    .pipe(concat('all.min.js'))
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
    gulp.watch(sourceFiles, ['concat','minify']);
});

gulp.task('default', ['concat','minify', 'watch']);
