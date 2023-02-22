let sum = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 100) {
        basic.pause(10)
        if (pins.analogReadPin(AnalogPin.P1) > 100) {
            sum += 1
        }
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 100) {
        basic.pause(10)
        if (pins.analogReadPin(AnalogPin.P1) > 100) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(sum)
        } else {
            basic.clearScreen()
        }
    } else {
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(sum)
        basic.pause(2000)
    }
    if (input.buttonIsPressed(Button.B)) {
        sum = 0
        basic.showNumber(sum)
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 100) {
        basic.pause(10)
        if (pins.analogReadPin(AnalogPin.P1) > 100) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        }
    }
})
