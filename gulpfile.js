var postcss = require('gulp-postcss');
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var cssnext = require("gulp-cssnext");
var prefix = require('gulp-autoprefixer');
var lost = require('lost');

livereload({ start: true });

// ======== Html TASKS ============ //
gulp.task('HTML', function () {
    gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./dev/'))
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload())
});

// ======== Js TASKS ============ //
gulp.task('JS', function() {
    gulp.src('./src/scripts/app/app.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            optional: ['runtime'],
                            stage: 0
                        }
                    },
                    {
                        test: /\.json/,
                        loader: 'json-loader'
                    }
                ]
            }
        }))
        .pipe(rename("app.js"))
        .pipe(gulp.dest('./dev/scripts'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(jsmin())
        //.pipe(gulp.dest('./dist/scripts'));
    .pipe(livereload());
});

// ======== Css TASKS ============ //
gulp.task('CSS', function () {
    gulp.src('./src/styles/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(prefix('last 2 versions'))
      .pipe(postcss([
          lost()
      ]))
      .pipe(gulp.dest('./dev/styles'))
      .pipe(minifyCss())
      .pipe(rename({suffix: ".min"}))
      .pipe(gulp.dest('./dist/styles'))
      .pipe(livereload())
});

// ======== Watch TASKS ============ //
gulp.task('watch', function () {

    gulp.watch('./src/html/**/*.html', ['HTML']);
    gulp.watch('./src/styles/**/*.scss', ['CSS']);
    gulp.watch('./src/scripts/app/**/**/**/*.js', ['JS']);

    livereload.listen();
});

gulp.task('default', ['watch']);