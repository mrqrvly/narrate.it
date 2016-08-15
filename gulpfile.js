//  GULPFILE
//  ========

//  Dependencies
//  ------------
var gulp = require('gulp'),
    less = require('gulp-less')
    gls  = require('gulp-live-server');

//  Transpile LESS
//  --------------
gulp.task('less', function() {
  gulp.src('./app/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./app/public/css'));
});

//  Run the local server
//  --------------------
gulp.task('server', function() {
  var server = gls('./app/server.js', {NODE_ENV: 'development', PORT: 3000});
  server.start();

  gulp.watch(['gulpfile.js', './app/server.js', './app/{controllers,models}/**/*.js'], function() {
    server.start.bind(server)()
  });
});

//  Watch for file changes
//  ----------------------
gulp.task('watch', function() {
  gulp.watch(['./app/public/less/**/*.less'], ['less']);
});

//  Default task
//  ------------
gulp.task('default', ['watch', 'server']);
