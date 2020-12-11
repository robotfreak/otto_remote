input.onButtonPressed(Button.A, function () {
    radio.sendValue("forward", 100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("back", 100)
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
