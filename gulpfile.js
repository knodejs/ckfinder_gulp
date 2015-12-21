var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');


gulp.task('default', function() {
    connect.server({
        hostname: '0.0.0.0',
        bin: 'D:/Developer/WebServer/php-7.0.1-nts-Win32-VC14-x64/php',
        ini: 'D:/Developer/WebServer/php-7.0.1-nts-Win32-VC14-x64/php.ini',
        port: 8000

    }, function() {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });
});
