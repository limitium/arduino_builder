var gulp = require('gulp');
var shell = require('gulp-shell');

var options = {
    projectName: 'firmware',
    port: '/dev/ttyUSB0',
    speed: 9600,
    package: 'arduino',
    architecture: 'avr',
    board: 'nano',
    cpu: 'atmega328',
    verbose: true
};

gulp.watch([
    'src/' + options.projectName + '/*.cpp',
    'src/' + options.projectName + '/*.h',
    'src/' + options.projectName + '/*.ino'], ['default']);

gulp.task('upload', function (done) {
    shell.task([
        'killall -9 cat 2>/dev/null',
        'arduino --board ' + options.package + ':' + options.architecture + ':' + options.board + ':cpu=' + options.cpu + ' --port ' + options.port + ' --upload src/' + options.projectName + '/' + options.projectName + '.ino' + (options.verbose ? ' --verbose' : ''),
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