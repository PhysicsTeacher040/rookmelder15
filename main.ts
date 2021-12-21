radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Forever)
        music.setVolume(255)
        basic.showString("VUUR!")
    }
    if (receivedNumber == 0) {
        music.stopAllSounds()
        basic.clearScreen()
    }
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.setGroup(1)
    if (pins.analogReadPin(AnalogPin.P1) <= 200) {
        radio.sendNumber(1)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        radio.sendNumber(0)
    }
    if (pins.analogReadPin(AnalogPin.P0) >= 200) {
        radio.sendNumber(0)
    }
})
