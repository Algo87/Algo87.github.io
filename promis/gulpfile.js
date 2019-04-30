var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync');
var concat=require('gulp-concat');
var uglify=require('gulp-uglifyjs');
// var autoprefixer=require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src(['app/scss/**/*.scss', 'app/scss/**/*.sass'])
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('code', function(){
	return gulp.src('app/**/*.html')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/slick-carousel/slick/slick.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});



gulp.task('watch', function(){
	
	gulp.watch(['app/scss/**/*.scss', 'app/scss/**/*.sass'], gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
});

gulp.task('browser-sync', async function(){

	browserSync({
		server:{
			baseDir: 'app',
			index: 'home.html'
		},
		notify:false
	});
});
gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));
