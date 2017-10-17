var fs = require('fs');

//TODO: give the possiblity of using different evdev files by giving different arguments

fs.copyFile('./evdev_for_MACBOOKPRO_2/evdev', './/usr/share/X11/xkb/keycodes/evdev', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});
