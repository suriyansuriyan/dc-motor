let A = 0
basic.forever(function () {
    A = pins.analogReadPin(AnalogPin.P0)
    if (A == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
