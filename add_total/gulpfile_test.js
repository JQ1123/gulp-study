var gulp = require("gulp");
var less = require("gulp-less");
var htmlmin = require("gulp-htmlmin");
var cssmin = require("gulp-minify-css"); //最新gulp-clean-css
var imagemin = require("gulp-imagemin");
var rev = require("gulp-rev-append");  //给页面引用url添加版本号，以清除页面缓存  <script src="demo.js?rev=@@hash"></script>
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
gulp.task("compileLess",function(){
	gulp.src("src/less/styles.less")
		.pipe(less())
		.pipe(gulp.dest("dist/css"));
});

gulp.task("compileHtmlmin",function(){
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	};
	gulp.src("src/*.html")
		.pipe(htmlmin(options))
		.pipe(gulp.dest("dist"));
});

gulp.task("compileCssmin",function(){
	var options = {
        advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
        keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }
	gulp.src("dist/css/*.css")
		.pipe(cssmin())
		.pipe(gulp.dest("dist/cssMin"));
});
	//更多***给css文件里引用url加版本号（根据引用文件的md5生产版本号）
		//确保已本地安装gulp-make-css-url-version [cnpm install gulp-make-css-url-version --save-dev]
		//var cssver = require('gulp-make-css-url-version'); 
		//gulp.pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）

gulp.task("compileRev",function(){
	gulp.src("src/*.html")
		.pipe(rev())
		.pipe(gulp.dest("dist/htmlRev"));
});
		
gulp.task("jsmin",function(){
	var options = {
        mangle: true,//类型：Boolean 默认：true 是否修改变量名
		//mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
        compress: true,//类型：Boolean 默认：true 是否完全压缩
        preserveComments: 'all' //保留所有注释
   }
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});	
	//多个文件以数组形式传入
	//gulp.src(['src/js/index.js','src/js/detail.js']) 
	//压缩src/js目录下的所有js文件
    //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
    //gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js']) 

gulp.task("compileConcat",function(){
	gulp.src("src/js/*.js")
		.pipe(concat("all.js"))
		.pipe(gulp.dest("dist/js"));
});
	
gulp.task("default",["compileLess"]);

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径