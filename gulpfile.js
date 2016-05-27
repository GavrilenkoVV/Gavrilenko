var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    prettify = require('gulp-html-prettify'),
    jade = require('gulp-jade'),
    pngquant = require('imagemin-pngquant'),
    uncss = require('gulp-uncss'),
    rename = require('gulp-rename'),
    complexity = require('gulp-complexity'),
    jscpd = require('gulp-jscpd'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('app/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/'));
});

gulp.task('styl', function() {
    return gulp.src('app/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(concatCss('style.css')) //уточнить правильност написания и пути styl.css
        .pipe(gulp.dest('./app/css/'));

});

gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('styl', function() {
    return gulp.src('./app/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
        .pipe(concatCss('style.css')) //styl.css
        .pipe(gulp.dest('./public/css/'));

});

gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('js', function () {
    return gulp.src('./app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('styl', function() {
    return gulp.src('./app/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
        .pipe(concatCss('style.css')) //styl.css
        .pipe(gulp.dest('./app/css/'));

});

gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('image', function () {
    return gulp.src('app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/images/'));
});

gulp.task('js', function () {
    return gulp.src('./app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/')) //уточнить путь!
});

gulp.task('styl', function() {
    return gulp.src('./app/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
        .pipe(concatCss('style.css')) //styl.css
        .pipe(gulp.dest('./app/css/'));

});

gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('image', function () {
    return gulp.src('app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/images/'));
});

gulp.task('js', function () {
    return gulp.src('./app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('styl', function() {
    return gulp.src('./app/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
        .pipe(concatCss('style.css')) //styl.css
        .pipe(gulp.dest('./public/css/'));

});

gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/'));
});


gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    return gulp.src('./app/template/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(prettify({indent_char: ' ', indent_size: 3}))
        .pipe(gulp.dest('./'))
})


gulp.task('watch', function() {
    gulp.watch("./app/styl/*.styl", ['styl']);
    gulp.watch("./app/css/*.css", ['css']);
    gulp.watch("./app/js/*.js", ['js']);
});

gulp.task('styl', function() {
    return gulp.src('./app/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
        .pipe(concatCss('style.css'))//styl.css
        .pipe(gulp.dest('./app/css/'));

});
gulp.task('css', function () {
    return gulp.src('./app/css/*.css')
        .pipe(uncss({
            html: ['./*.html']
        }))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/build/'));
});


gulp.task('watch', function() {
    gulp.watch("./app/styl/*.styl", ['styl']);
    gulp.watch("./app/css/*.css", ['css']);
});

gulp.task('autopolyfiller', function () {
    return gulp.src('./app/js/*.js')
        .pipe(autopolyfiller('result_polyfill_file.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('complexity', function () {
    return gulp.src('./app/js/*.js')
        .pipe(complexity());
});

gulp.task('copy-past', function () {
    return gulp.src('./app/js/*.js')
        .pipe(jscpd({
            'min-lines': 1,
            'min-tokens': 40,
            verbose    : true
        }));
});