num2 = 0
num1 = 0
basic.show_string("<P  R>")

def on_forever():
    global num1, num2
    if input.button_is_pressed(Button.A):
        num1 = randint(0, 10)
        num2 = randint(0, 10)
        basic.show_number(num1)
        basic.pause(1000)
        basic.show_string("x")
        basic.pause(1000)
        basic.show_number(num2)
        basic.pause(1000)
        basic.show_string("= ???")
    elif input.button_is_pressed(Button.B):
        basic.show_number(num1 * num2)
basic.forever(on_forever)
