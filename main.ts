let x = 0
let y = 0
basic.forever(function () {
    basic.pause(1000)
    led.stopAnimation()
    led.unplot(x, y)
    led.plotBrightness(x, y, 150)
    y += 1
    led.plot(x, y)
    if (y > 4) {
        y = -1
        x = randint(0, 4)
    }
    if (led.point(x, 2)) {
        led.plotBrightness(x, y - 1, 170)
        led.plotBrightness(x, y - 2, 80)
    }
})
