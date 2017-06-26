const gulp = require('gulp');
const devBuild = (process.env.NODE_ENV !== 'production');
const folders = {
  src: 'src/',
  dist: 'dist/'
};

gulp.task('default', ['run', 'watch']);

// watch for changes
gulp.task('watch', function() {
  gulp.watch(folder.src + 'html/**/*', ['html']);
  gulp.watch(folder.src + 'js/**/*', ['js']);
  gulp.watch(folder.src + 'less/**/*', ['css']);
});
