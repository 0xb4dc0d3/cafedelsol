const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile SASS
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
   .pipe(sass())
   .pipe(gulp.dest("src/css"))
   .pipe(browserSync.stream());
});

// Move JS Files to SRC

gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/moment/min/moment.min.js','node_modules/fullcalendar/dist/fullcalendar.min.js','node_modules/lightbox2/dist/js/lightbox.js', 'node_modules/slick-carousel/slick/slick.js'])
  .pipe(gulp.dest("src/js"))
  .pipe(browserSync.stream());
});


// Watch SASS & supportsNativeMutationObserver
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});


// Move Font Awesome CSS Files
gulp.task('fa', function(){
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("src/css"));
});


//Move Slick CSS Files

gulp.task('slick', function(){
  return gulp.src('node_modules/slick-carousel/slick/slick.css')
    .pipe(gulp.dest("src/css"));
});



//Move LightGallery CSS Files

gulp.task('lightgallery', function(){
  return gulp.src('node_modules/lightgallery.js/dist/css/lightgallery.css')
    .pipe(gulp.dest("src/css"));
});

//Move fullcalendar CSS Files

gulp.task('fullcalendar', function(){
  return gulp.src('node_modules/fullcalendar/dist/*.css')
    .pipe(gulp.dest("src/css"));
});


//Move Fonts folder to src
gulp.task('fonts', function(){
  return gulp.src(['node_modules/lightgallery.js/dist/fonts/*','node_modules/slick-carousel/slick/fonts/*','node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest("src/fonts"));
});

//Move  Img Files

gulp.task('img', function(){
  return gulp.src(['node_modules/lightbox2/dist/images/*', 'node_modules/slick-carousel/slick/ajax-loader.gif','node_modules/lightgallery.js/dist/img/*'])
    .pipe(gulp.dest("src/img"));
});

gulp.task('default', ['js', 'serve', 'fa', 'fonts', 'slick', 'fullcalendar','img','lightgallery']);
