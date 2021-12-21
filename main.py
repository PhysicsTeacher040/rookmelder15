def on_received_number(receivedNumber):
    if receivedNumber == 1:
        music.start_melody(music.built_in_melody(Melodies.WEDDING),
            MelodyOptions.FOREVER)
        music.set_volume(255)
        basic.show_string("FUCK DAVID!")
    if receivedNumber == 0:
        music.stop_all_sounds()
        basic.clear_screen()
radio.on_received_number(on_received_number)

basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")

def on_forever():
    radio.set_group(1)
    if pins.analog_read_pin(AnalogPin.P1) <= 200:
        radio.send_number(1)
        basic.show_leds("""
            # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    else:
        radio.send_number(0)
basic.forever(on_forever)
