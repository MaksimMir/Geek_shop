"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");


const dist = "./dist";

gulp.task("copy-html", () => {
    return gulp.src("./src/**.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-sass", () => {
    return gulp.src("./src/scss/main.scss")
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(cleanCSS())
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/**')
    // .pipe(imagemin())
	.pipe(gulp.dest(dist + '/img')); 
});

gulp.task("script", () => {
    return gulp.src('src/js/**.js')
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task("watch", () => {
    browsersync.init({
		server: dist,
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/**.html", gulp.parallel("copy-html"));
    gulp.watch("./src/img/**", gulp.parallel("imagemin"));
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/js/**.js", gulp.parallel("script"));
});

gulp.task("build", gulp.parallel("copy-html", "imagemin", "build-sass", "script"));

gulp.task("default", gulp.parallel("build", "watch"));