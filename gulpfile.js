//创建请求

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
const babel = require('gulp-babel');
var htmlminify = require("gulp-html-minify");
var gulp = require('gulp'),
  connect = require('gulp-connect');
var gulp = require('gulp'),
    watch = require('gulp-watch');
const rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');




//创建任务
gulp.task('default',['build-html','minijs','watch','connect'])

//开启服务器  dist做根目录
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 1818,
    livereload: true
  });
});
//压缩js
gulp.task('minijs',function(){
  gulp.src('app/static/js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
}))
  .pipe(uglify())
  .pipe(rename({ suffix:'.min'}))
  .pipe(gulp.dest('dist/js'))
 
})
//concat  任务执行不报错,未生效
gulp.task('concat',function(){
  gulp.src('app/static/js/*.js')
  .pipe(concat('all.js'))         // 合并all.js文件
  .pipe(gulp.dest('dist/js'));
})

//压缩html
gulp.task('build-html' , function(){
  return gulp.src("./html-init/**/*.html")
      .pipe(htmlminify())
      .pipe(gulp.dest("./html"))
});
//事件监听
gulp.task('watch', function () {
  // Endless stream mode
  return watch('css/**/*.css', { ignoreInitial: false })
      .pipe(gulp.dest('build'));
});
//rev
gulp.task('rev', () =>
    gulp.src('src/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
);

//练习

gulp.task('minihtml', function() {
    // 将你的默认的任务代码放在这
    console.log("开始压缩html");
  });
  gulp.task('minicss', function() {
    // 将你的默认的任务代码放在这
    console.log("开始压缩css");
  });
  gulp.task('miniimg', function() {
    // 将你的默认的任务代码放在这
    console.log("开始压缩img");
  });
    
  gulp.task('mini', ['minihtml','minicss','miniimg'],function() {
    // 将你的默认的任务代码放在这
    console.log("压缩成功了");
  });