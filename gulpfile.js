//创建请求

var gulp = require('gulp');
var uglify = require('gulp-uglify'); //压缩js
var concat = require('gulp-concat'); //合并文件
var rename = require("gulp-rename");//文件重命名
const babel = require('gulp-babel');//es6->es5
var htmlminify = require("gulp-html-minify");//压缩html
var connect = require('gulp-connect');//开启服务器
var cleanCSS = require('gulp-clean-css');  //压缩 css
var imagemin = require('gulp-imagemin');  //压缩图片
var sass = require('gulp-sass');    //sass  预处理器
    sass.compiler = require('node-sass');
// var gulp = require('gulp')
    // watch = require('gulp-watch');
// const rev = require('gulp-rev');  // 将文件名加上hash字符串
// var revCollector = require('gulp-rev-collector');




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
//压缩html
gulp.task('build-html' , function(){
  return gulp.src("app/static/*.html")
      .pipe(htmlminify())
      .pipe(gulp.dest("dist/html"))
});
//压缩js
gulp.task('minijs',function(){
  gulp.src('app/static/js/*.js')
  .pipe(babel({                   //es6->es5
    presets: ['@babel/env']
}))
  .pipe(uglify())               //压缩js
  .pipe(rename({ suffix:'.min'}))  //重命名
  .pipe(gulp.dest('dist/js')) 
 
})
//压缩css
gulp.task('csscompress', function() {
  // 1. 找到文件
return  gulp.src('app/static/*.css')
  // 2. 压缩文件
      .pipe(cleanCSS())
      // 3. 另存压缩后的文件
      .pipe(gulp.dest('dist/css'));
});
//压缩图片
gulp.task('imagemin', function() {
  gulp.src('image/*.{jpg,png,gif}')
           .pipe(imagemin())
  　　　　　　　　//压缩后放在那个文件夹
           .pipe(gulp.dest("dist/miniimg"))
   });
//concat
gulp.task('concat',function(){   
  gulp.src('app/static/js/*.js')
  .pipe(concat('all.js'))         // 合并all.js文件
  .pipe(gulp.dest('dist/js'));
})
//sass 预处理器
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


//事件监听
// gulp.task('watch', function () {
//   // Endless stream mode
//   return watch('css/**/*.css', { ignoreInitial: false })
//       .pipe(gulp.dest('build'));
// });
//rev
// gulp.task('rev', () =>
//     gulp.src('src/*.css')
//         .pipe(rev())
//         .pipe(gulp.dest('dist'))
// );

//练习

// gulp.task('minihtml', function() {
//     // 将你的默认的任务代码放在这
//     console.log("开始压缩html");
//   });
//   gulp.task('minicss', function() {
//     // 将你的默认的任务代码放在这
//     console.log("开始压缩css");
//   });
//   gulp.task('miniimg', function() {
//     // 将你的默认的任务代码放在这
//     console.log("开始压缩img");
//   });
    
//   gulp.task('mini', ['minihtml','minicss','miniimg'],function() {
//     // 将你的默认的任务代码放在这
//     console.log("压缩成功了");
//   })