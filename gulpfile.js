/*
	echo << gulpfile.js
	npm install gulp
	npm install gulp-uglify
	npm install gulp-minify-css
	npm install gulp-imagemin
	npm install gulp-less
	**20151127**
*/

// 获取 gulp
var gulp = require('gulp')

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify')
// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')
// 获取 gulp-imagemin 模块
var imagemin = require('gulp-imagemin')
// 获取 gulp-less 模块
var less = require('gulp-less')


// 压缩 js 文件
	// 在命令行使用 gulp script 启动此任务
	gulp.task('script', function() {
		// 1. 找到文件
		gulp.src('js/*.js')
		// 2. 压缩文件
			.pipe(uglify())
		// 3. 另存压缩后的文件
			.pipe(gulp.dest('dist/js'))
	})        

	// 在命令行使用 gulp auto 启动此任务
	gulp.task('auto', function () {
		// 监听文件修改，当文件被修改则执行 script 任务
		gulp.watch('js/*.js', ['script'])
	})


// 压缩 css 文件
	// 在命令行使用 gulp css 启动此任务
	gulp.task('css', function () {
		// 1. 找到文件
		gulp.src('css/*.css')
		// 2. 压缩文件
			.pipe(minifyCSS())
		// 3. 另存为压缩文件
			.pipe(gulp.dest('dist/css'))
	})

	// 在命令行使用 gulp auto 启动此任务
	gulp.task('auto', function () {
		// 监听文件修改，当文件被修改则执行 css 任务
		gulp.watch('css/*.css', ['css'])
	});

	
// 压缩图片任务
	// 在命令行输入 gulp images 启动此任务
	gulp.task('images', function () {
		// 1. 找到图片
		gulp.src('images/*.*')
		// 2. 压缩图片
			.pipe(imagemin({
				progressive: true
			}))
		// 3. 另存图片
			.pipe(gulp.dest('dist/images'))
	});

	// 在命令行使用 gulp auto 启动此任务
	gulp.task('auto', function () {
		// 监听文件修改，当文件被修改则执行 images 任务
		gulp.watch('images/*.*)', ['images'])
	});
	
	
// 编译less
	// 在命令行输入 gulp less 启动此任务
	gulp.task('less', function () {
		// 1. 找到 less 文件
		gulp.src('less/**.less')
		// 2. 编译为css
			.pipe(less())
		// 3. 另存文件
			.pipe(gulp.dest('dist/css'))
	});

	// 在命令行使用 gulp auto 启动此任务
	gulp.task('auto', function () {
		// 监听文件修改，当文件被修改则执行 less 任务
		gulp.watch('less/**.less', ['less'])
	})	
	
// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 script css images任务和 auto 任务
gulp.task('default', ['script', 'auto'])
gulp.task('default', ['css', 'auto'])
gulp.task('default', ['images', 'auto'])
gulp.task('default',['less','auto'])



