const { exec } = require('child_process');

console.log('Starting MIDI to MP3 conversion...');
console.time('conversion');
exec('timidity ./input/test.mid -Ow -o - | lame - -b 64 ./output/file.mp3', (err, stdout, stderr) => {
  if (err) {
    console.err("Error: " + err);
    return;
  }

  console.timeEnd('conversion');

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});