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
  gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
});

//  Run the local server
//  --------------------
gulp.task('server', function() {
  var server = gls('./src/index.js', {NODE_ENV: 'development', PORT: 3000});
  server.start();

  gulp.watch(['gulpfile.js', './src/index.js', './src/{controllers,models}/**/*.js'], './src/views/**/*.hbs' function() {
    server.start.bind(server)()
  });
});

//  Watch for file changes
//  ----------------------
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
});

//  Default task
//  ------------
gulp.task('default', ['watch', 'server']);
