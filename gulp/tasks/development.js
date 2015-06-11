'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
//This is were the dev folder is called.
//clean will happen as the first step.
gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {
  	console.log('development task complete');
  };

  global.isProd = false;
  //then it will run the sequence of steps specified
  //runSequence('styles', 'ie8styles', 'ie7styles', 'views','templates', 'images', 'js','scripts', 'browserify','copyfonts','lint','styles_minify', 'watch', cb);

  runSequence('styles', 'views','templates', 'images', 'js','scripts', 'browserify','copyfonts', 'watch', cb);

});