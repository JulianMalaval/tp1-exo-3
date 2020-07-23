x = 0
y = 0
led.plot(0, 0)

def on_forever():
    global y, x
    basic.pause(1000)
    led.unplot(x, y)
    led.plot_brightness(x, y, 150)
    y += 1
    led.plot(x, y)
    if y > 4:
        y = -1
        x = randint(0, 4)
basic.forever(on_forever)
