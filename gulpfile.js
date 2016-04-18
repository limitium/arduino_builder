var gulp = require('gulp');
var shell = require('gulp-shell');

var options = {
    sketch: 'arduino_builder.ino',
    port: '/dev/ttyUSB0',
    speed: 9600,
    package: 'arduino',
    architecture: 'avr',
    board: 'nano',
    cpu: 'atmega328',
    verbose: true
};

gulp.watch([options.sketch], ['default']);

gulp.task('upload', function (done) {
    shell.task([
        'killall -9 cat',
        'arduino --board ' + options.package + ':' + options.architecture + ':' + options.board + ':cpu=' + options.cpu + ' --port ' + options.port + ' --upload ' + options.sketch + (options.verbose ? ' --verbose' : ''),
        'stty -F ' + options.port + ' cs8 ' + options.speed + ' ignbrk -brkint -imaxbel -opost -onlcr -isig -icanon -iexten -echo -echoe -echok -echoctl -echoke noflsh -ixon -crtscts'
    ])(function (err) {
        done();
        shell.task([
            err ? 'paplay /usr/share/sounds/ubuntu/notifications/Amsterdam.ogg' : 'cat ' + options.port
        ])();
    });
});

gulp.task('default', ['upload'], function () {

});