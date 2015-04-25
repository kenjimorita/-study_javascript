var gulp = require("gulp");
var connect = require("gulp-connect");
var path = require("path");
var sass = require("gulp-sass");

var path = [
"./html/*.html",
"./css/*.css",
"./scss/*.scss"
];
gulp.task("sass",function(){
			gulp.src(['./scss/*.scss']) // srcを指定
			.pipe(sass())                 // 指定したファイルをJSにコンパイル
			.pipe(gulp.dest('./dest'))      // dest先に出力する
		});

gulp.task("html",function(){
	gulp.src('./html/*.html')
});
gulp.task("connect", function() {
	connect.server({
		livereload: true,
		port: 8000,
		root: './'
	});
});

gulp.task("watch", function() {
	gulp.watch(path, ['sass','html','reload']);
});

gulp.task("reload", function() {
	gulp.src('./html/*.html')
	.pipe(connect.reload());
	gulp.src('./scss/*.html')
	.pipe(connect.reload());
});

gulp.task("default", ["connect", "watch"]);
