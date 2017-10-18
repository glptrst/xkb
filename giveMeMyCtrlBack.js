var fs = require('fs');

var arg = process.argv[2];

if (arg === '1') {
    fs.copyFile('./evdev_for_MACBOOKPRO_1/evdev', '/usr/share/X11/xkb/keycodes/evdev', (err) => {
	if (err) throw err;
	console.log('Keyboard successfully modified');
    });
} else if (arg === '2') {
    fs.copyFile('./evdev_for_MACBOOKPRO_2/evdev', '/usr/share/X11/xkb/keycodes/evdev', (err) => {
	if (err) throw err;
	console.log('Keyboard successfully modified');
    });
} else if (arg === undefined) {
    console.log('Provide an argument');
} else {
    console.log('Unknown argument');
}
