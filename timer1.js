let bip = process.argv.slice(2)

let time = " " + "seconds" + "\n"
for (let i = 0; i < bip.length; i++) {
  setTimeout(() => {
    process.stdout.write(`${bip[i]}` + `${time}`)
  }, 1000 * bip[i])
}
process.stdout.write('\x07');
