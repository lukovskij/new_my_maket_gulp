var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');


gulp.task('sass', function () {
    return gulp.src('front-end/sass/**/*.scss')
    .pipe(sass()).on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sass Error!"
      } ) )
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('front-end/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'front-end'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function (){
    gulp.watch('front-end/sass/**/*.scss', ['sass']);
    gulp.watch('front-end/*.html', browserSync.reload);
    gulp.watch('front-end/js/**/*.js', browserSync.reload);
});
gulp.task('clear', function () {
    return cache.clearAll();
})
gulp.task('default', ['watch']);
