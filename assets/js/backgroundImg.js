console.log('work!');

let images = ['bgc-1', 'bgc-2', 'bgc-3', 'bgc-4'],
    pageBody = document.body,
    i = 1;

if (pageBody.classList.contains('body-images')) {

    pageBody.style.backgroundImage = "url('assets/img/" + images[0] + ".jpg')";

    setInterval(function () {
        pageBody.style.backgroundImage = "url('assets/img/" + images[i] + ".jpg')"
        ++i >= images.length ? i = 0 : null;
    }, 3000);
}
