download php 7 for windows
http://windows.php.net/downloads/releases/php-7.0.1-nts-Win32-VC14-x64.zip


Set Path Php 7 gulpfile.js




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


edit config  php.ini
	document/php7.ini.readme


run 
npm install & bower install & npm install gulp -g


web url
http://localhost:8000