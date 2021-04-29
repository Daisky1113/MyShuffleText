const h1 = new MyShuffleText({
    el: document.querySelector('#js-headLine'),
    duration: 1000,
    hideDuration: 1000,
    delay: 300,
    fps: 60
})

const textController = new TextController({
    targets: ['.js-myText'],
    duration: 1000,
    hideDuration: 1000,
    delay: 300,
    fps: 60
})

const fileInputWrapper = document.querySelector('.fileInput-wrapper')

h1.show()
    .then(() => textController.seq('show'))
    .then(() => textController.seq('hide'))
    .then(() => textController.sync('show'))
    .then(() => textController.sync('hide'))
    .then(() => fileInputWrapper.classList.remove('inVisible'))