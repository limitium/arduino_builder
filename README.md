# Arduino uploader and serial monitor

This project helps to track changes in your sketch file, automatically updates firmware, starts serial monitor and notices you by sound if error occurs. When changes have been saved:

 1. Close previous Serial Monitor
 2. Compile sketch file
 3. Upload sketch to arduino
 4. Start new Serial Monitor
 5. Wait for new changes


#### 1. Install Arduino IDE:

Download Arduino IDE from here https://www.arduino.cc/en/Main/Software

#### 2. Make arduino command executable globally

```sh
$ ln -s path/to/arduino/folder/arduino /usr/bin/arduino
```

#### 3. Install nodejs with npm

```sh
$ apt-get install nodejs
```

#### 4. Install gulp

```sh
$ npm install --global gulp-cli
```

#### 5. Install project dependecies

Go to project folder and run 

```sh
$ npm install
```

#### 6. Change options

You need to specify at least your port and arduino type

```js
{
    projectName: 'firmware',
    port: '/dev/ttyUSB0',
    speed: 9600,
    package: 'arduino',
    architecture: 'avr',
    board: 'nano',
    cpu: 'atmega328',
    verbose: true
}
```

#### 7. Start Gulp 

```sh
$ gulp
```

Congratz we are done. Now you can make changes in `src/firmware/firmware.ino` file and see how it works.
