var gulp = require('gulp');
var mocha = require('gulp-mocha');
 
gulp.task('test', function () {
    return gulp.src('tests/*.js')
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function () {
    gulp.watch('./tests/*.js', ['test']);
});

