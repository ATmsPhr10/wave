function déplacement () {
    for (let var1 = 0; var1 <= 2; var1++) {
        led.plotBrightness(0, y - var1, led2[var1])
        led.plotBrightness(1, y1 - var1, led2[var1])
        led.plotBrightness(2, y2 - var1, led2[var1])
        led.plotBrightness(3, y3 - var1, led2[var1])
        led.plotBrightness(4, y4 - var1, led2[var1])
    }
    y += ascenseur
    y1 += ascenseur1
    y2 += ascenseur2
    y3 += ascenseur3
    y4 += ascenseur4
    basic.pause(100)
}
function direction () {
    if (y >= 5) {
        ascenseur = -1
    } else if (y <= 1) {
        ascenseur = 1
    }
    if (y1 >= 5) {
        ascenseur1 = -1
    } else if (y1 <= 1) {
        ascenseur1 = 1
    }
    if (y2 >= 5) {
        ascenseur2 = -1
    } else if (y2 <= 1) {
        ascenseur2 = 1
    }
    if (y3 >= 5) {
        ascenseur3 = -1
    } else if (y3 <= 1) {
        ascenseur3 = 1
    }
    if (y4 >= 5) {
        ascenseur4 = -1
    } else if (y4 <= 1) {
        ascenseur4 = 1
    }
}
let ascenseur4 = 0
let ascenseur3 = 0
let ascenseur2 = 0
let ascenseur1 = 0
let ascenseur = 0
let y4 = 0
let y3 = 0
let y2 = 0
let y1 = 0
let y = 0
let led2: number[] = []
led2 = [0, 255, 0]
y = 0
y1 = 1
y2 = 2
y3 = 3
y4 = 4
ascenseur = 1
ascenseur1 = 1
ascenseur2 = 1
ascenseur3 = 1
ascenseur4 = 1
basic.forever(function () {
    direction()
    déplacement()
})
