let x = randint(0, 4)
let y = randint(0, 4)
basic.forever(function () {
    basic.pause(100)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    if (y > 4) {
        y = -1
        x = randint(0, 4)
    }
    if (led.point(x, y)) {
        led.plot(x, y + 1)
        led.plot(x, y + 2)
        led.plotBrightness(x, y, 80)
        led.plotBrightness(x, y + 1, 170)
    }
})
