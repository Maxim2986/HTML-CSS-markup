/**
 * Created by Senior on 23.09.2019.
 */


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления
    imagemin = require('gulp-imagemin'),
    cssnano = require("gulp-cssnano");
    // browserSync = require('browser-sync'); // Подключаем Browser Sync
    // gutil = require('gulp-util'),
    // ftp = require('vinyl-ftp');

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
        // .pipe(concat('scripts.js')) // объеденим все js-файлы в один
        // .pipe(uglify()) // вызов плагина uglify - сжатие кода
        // .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
});

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем преф
        // .pipe(autoprefixer({  browsers: ['last 50 versions'],            cascade: false        }))
        // .pipe(cssnano())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css')); // Выгружаем результата в папку app/css
        // .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});




// gulp.task('browser-sync', function() { // Создаем таск browser-sync
//     browserSync({ // Выполняем browser Sync
//         server: { // Определяем параметры сервера
//             baseDir: 'app/' // Директория для сервера - app
//         },
//         notify: false // Отключаем уведомления
//     });
// });


/*gulp.task('deploy', function() {
 var conn = ftp.create({
 host:  '127.0.0.1',
 port: '21',
 user: 'ftp',
 password:  'ftp',
 parallel:  10,
 log: gutil.log
 });

 var globs = [
 'app/css/main.css'
 ];
 return gulp.src(globs, {buffer: false})
 .pipe(conn.dest('/27dom/wp-content/themes/domdereva/css'));
 });*/

// gulp.task('watch', function() {
    // gulp.watch('src/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    // gulp.watch('app/css/**/*.css', ['deploy']); // Наблюдение за sass файлами
    // gulp.watch('app/css/**/*.css', browserSync.reload); // Наблюдение за css файлами
    // gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    // gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке jswatch

    // Наблюдение за другими типами файлов
// });

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












