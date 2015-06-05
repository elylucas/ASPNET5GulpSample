/// <binding ProjectOpened='less-watch' />

var gulp = require('gulp'),
    less = require('gulp-less'),
    rimraf = require('rimraf'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate');

var path = {
    app: './wwwroot/app/',
    assets: './wwwroot/assets',
    bower: './bower_components/',
    css: './wwwroot/css/',
    webLib: './wwwroot/lib/'
}

gulp.task('copy', ['clean'], function () {

    gulp.src(path.bower + 'jquery/dist/jquery.js')
        .pipe(gulp.dest(path.webLib + 'jquery'));

    var angularFiles = [
        path.bower + 'angular/angular.js',
        path.bower + 'angular-animate/angular-animate.js',
        path.bower + 'angular-ui-router/release/angular-ui-router.js'
    ];

    gulp.src(angularFiles)
        .pipe(gulp.dest(path.webLib + "angular"));

    gulp.src(path.bower + 'bootstrap/dist/**/*.{js,css,font,woff,svg,ttf}')
        .pipe(gulp.dest(path.webLib + 'bootstrap'));

});

gulp.task('clean', function (cb) {
    rimraf(path.webLib, cb);
});

gulp.task('less', function () {
    gulp.src(path.css + '*.less')
        .pipe(less())
        .pipe(gulp.dest(path.css));
});

gulp.task('less-watch', function () {
    gulp.watch(path.css + '**/*.less', ['less']);
});

gulp.task('bundle', function () {

    var libJsFiles = [
        path.webLib + 'jquery/jquery.js',
        path.webLib + 'bootstrap/bootstrap.js',
        path.webLib + 'angular/angular.js',
        path.webLib + 'angular/**/*.js'
    ];

    var libCssFiles = [
        path.webLib + 'bootstrap/css/bootstrap.css'
    ];

    var appJsFiles = [
        path.app + '**/*.module.js',
        path.app + '**/*.js'
    ];

    var appCssFiles = [
        path.css + '**/*.css'
    ];

    gulp.src(libJsFiles)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(path.assets))
        .pipe(rename('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.assets));

    gulp.src(libCssFiles)
        .pipe(concat('lib.css'))
        .pipe(gulp.dest(path.assets))
        .pipe(rename('lib.min.css'))
        .pipe(csso())
        .pipe(gulp.dest(path.assets));

    gulp.src(appJsFiles)
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(path.assets))
        .pipe(rename('app.min.js'))
        .pipe(uglify())        
        .pipe(gulp.dest(path.assets));

    gulp.src(appCssFiles)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(path.assets))
        .pipe(rename('app.min.css'))
        .pipe(csso())
        .pipe(gulp.dest(path.assets));



});