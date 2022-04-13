export function setDecorAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 20
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 200
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30
    const valueX5 = (e.pageX * -1) / 100
    const valueY5 = (e.pageY * -1) / 100

    // Decor 1
    document.querySelector(
        '.main .decor-1'
    ).style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelector(
        '.main .decor-2'
    ).style.transform = `translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelector(
        '.main .decor-3'
    ).style.transform = `translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelector(
        '.main .decor-4'
    ).style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
    document.querySelector(
        '.main__ownWindow-wrapper-inner-owl'
    ).style.transform = `translate3d(${valueX5}px, ${valueY5}px, 0)`
}

export function setHowItWorksAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 40
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 100
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30

    document.querySelector(
        '.mainSecond .decor-1'
    ).style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelector(
        '.mainSecond .decor-2'
    ).style.transform = `rotate(70deg) translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelector(
        '.mainSecond .decor-3'
    ).style.transform = `rotate(270deg) translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelector(
        '.mainSecond .decor-4'
    ).style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
}

export function setResultsAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 20
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 200
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30

    // Decor 1
    document.querySelector(
        '.aboutSection .decor-1'
    ).style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelector(
        '.aboutSection .decor-2'
    ).style.transform = `translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelector(
        '.aboutSection .decor-3'
    ).style.transform = `translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelector(
        '.aboutSection .decor-4'
    ).style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
}

export function setMainFourthAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 40
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 100
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30

    document.querySelector(
        '.mainFourth .decor-1'
    ).style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelector(
        '.mainFourth .decor-2'
    ).style.transform = `rotate(260deg) translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelector(
        '.mainFourth .decor-3'
    ).style.transform = `rotate(110deg) translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelector(
        '.mainFourth .decor-4'
    ).style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
}

export function setDecorArrayAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 20
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 200
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30

    // Decor 1
    document.querySelectorAll(
        '.mainFifth .decor-1'
    )[1].style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelectorAll(
        '.mainFifth .decor-2'
    )[1].style.transform = `translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelectorAll(
        '.mainFifth .decor-3'
    )[1].style.transform = `translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelectorAll(
        '.mainFifth .decor-4'
    )[1].style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
}

export function setAboutAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 40
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 100
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30

    document.querySelector(
        '.mainSixth .decor-1'
    ).style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelector(
        '.mainSixth .decor-2'
    ).style.transform = `rotate(260deg) translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelector(
        '.mainSixth .decor-3'
    ).style.transform = `rotate(110deg) translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelector(
        '.mainSixth .decor-4'
    ).style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
}

export function setContactAnimation(e) {
    const valueX1 = (e.pageX * -1) / 120
    const valueY1 = (e.pageY * -1) / 120
    const valueX2 = (e.pageX * -1) / 40
    const valueY2 = (e.pageY * -1) / 60
    const valueX3 = (e.pageX * -1) / 40
    const valueY3 = (e.pageY * -1) / 100
    const valueX4 = (e.pageX * -1) / 30
    const valueY4 = (e.pageY * -1) / 30

    document.querySelector(
        '.contactUs .decor-1'
    ).style.transform = `translate3d(${valueX1}px, ${valueY1}px, 0)`

    // Decor 2
    document.querySelector(
        '.contactUs .decor-2'
    ).style.transform = `translate3d(${valueX2}px, ${valueY2}px, 0)`

    // Decor 3
    document.querySelector(
        '.contactUs .decor-3'
    ).style.transform = `rotate(180deg) translate3d(${valueX3}px, ${valueY3}px, 0)`

    // Decor 4
    document.querySelector(
        '.contactUs .decor-4'
    ).style.transform = `translate3d(${valueX4}px, ${valueY4}px, 0)`
}
