input.onButtonPressed(Button.A, function () {
    radio.sendValue("g1d2", input.temperature())
    radio.sendValue("g1d3", input.soundLevel())
    if (input.temperature() > Temp_Threshold && input.soundLevel() > Noise_Threshold) {
        radio.sendValue("g1d1", 1)
        basic.showIcon(IconNames.Diamond)
    } else {
        radio.sendValue("g1d1", 0)
        basic.showIcon(IconNames.Yes)
    }
})
let Noise_Threshold = 0
let Temp_Threshold = 0
radio.setGroup(255)
Temp_Threshold = 25
Noise_Threshold = 125
