input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # # # # #
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("dog")
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . . . . .
            . . # # .
            # # . # #
            # # . . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("mouse")
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . . # # .
            . . # # .
            # # . . .
            # # . . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # # # .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("person")
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # #
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            # # . # #
            . # # # .
            `)
    }
})
