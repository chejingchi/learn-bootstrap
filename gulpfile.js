// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//检查脚本
gulp.task('lint',function(){
  gulp.src('./src/bootstrap/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

//编译Sass
gulp.task('sass',function(){
  gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});

//合并，压缩文件
gulp.task('scripts',function() {
  gulp.src('./src/bootstrap/js/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dest/bootstrap/js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dest/bootstrap/js'));
});


gulp.task('help',function () {

  console.log('	gulp build			文件打包');
  console.log('	gulp watch			文件监控打包');
  console.log('	gulp help			gulp参数说明');
  console.log('	gulp server			测试server');
  console.log('	gulp -p				生产环境（默认生产环境）');
  console.log('	gulp -d				开发环境');
  console.log('	gulp -m <module>		部分模块打包（默认全部打包）');

});

/* 默认 */

gulp.task('default',function () {
  gulp.run('lint','sass','scripts');
  //监听文件变化
  gulp.watch('./js/*.js',function(){
    gulp.run('lint','sass','scripts');
  });
});
