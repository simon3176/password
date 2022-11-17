input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Password == Entry) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    Entry = "" + Entry + "B"
})
let Entry = ""
let Password = ""
Password = "AABAA"
Entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(255)
