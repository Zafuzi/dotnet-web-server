var gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-csso'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename');

gulp.task('shared_html', function() {
    return watch('./Views/templates/Shared/*.pug', function() {
        gulp.src('./Views/templates/Shared/*.pug')
            .pipe(pug())
            .pipe(rename(function(path) {
                path.extname = ".cshtml";
            }))
            .pipe(gulp.dest('Views/Shared'));
    });
});
gulp.task('home_html', function() {
    return watch('./Views/templates/Home/*.pug', function() {
        gulp.src('./Views/templates/Home/*.pug')
            .pipe(pug())
            .pipe(rename(function(path) {
                path.extname = ".cshtml";
            }))
            .pipe(gulp.dest('Views/Home'));
    });
});

gulp.task('misc_html', function() {
    return watch('./Views/templates/*.pug', function() {
        gulp.src('./Views/templates/*.pug')
            .pipe(pug())
            .pipe(rename(function(path) {
                path.extname = ".cshtml";
            }))
            .pipe(gulp.dest('Views/'));
    });
});

gulp.task('css', function() {
    return watch('./Views/templates/styles/*.less', function() {
        gulp.src('./Views/templates/styles/*.less')
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(gulp.dest('wwwroot/css'));
    });
});

gulp.task('default', ['shared_html', 'home_html', 'misc_html', 'css']);