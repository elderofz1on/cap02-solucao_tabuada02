let num2 = 0
let num1 = 0
basic.showString("<P  R>")
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        num1 = randint(0, 10)
        num2 = randint(0, 10)
        basic.showNumber(num1)
        basic.pause(1000)
        basic.showString("x")
        basic.pause(1000)
        basic.showNumber(num2)
        basic.pause(1000)
        basic.showString("= ???")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(num1 * num2)
    }
    
})
