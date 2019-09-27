
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления
    imagemin = require('gulp-imagemin'),
    cssnano = require("gulp-cssnano");

gulp.task("html", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function() {
    return gulp.src("src/css/*.css")
        .pipe(gulp.dest("dist/css"));
});

// Сжимаем картинки
gulp.task('imgs', function() {
    return gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});

// Объединение и сжатие JS-файлов
gulp.task("scripts", function() {
    return gulp.src("src/js/*.js") // директория откуда брать исходники
        .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем преф
        .pipe(gulp.dest('dist/css')); // Выгружаем результата в папку app/css

});


// Задача слежения за измененными файлами
gulp.task('watch', function() {
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("src/js/*.js", ["scripts"]);
    // gulp.watch("src/sass/*.sass", ["sass"]);
    gulp.watch('src/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch("src/images/*.+(jpg|jpeg|png|gif)", ["imgs"]);
});

// Запуск тасков по умолчанию
gulp.task("default", ["html", "css", "sass", "scripts", "imgs", "watch"]);

// gulp.task('default', ['watch']);












