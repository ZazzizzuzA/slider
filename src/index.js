import './styles/style';

let arrPic = Array.from(document.getElementsByClassName("block__item-slide_pic")),
    arrBox = Array.from(document.getElementsByClassName("block__item-slide")),
    arrVisSlide = Array.from(document.getElementsByClassName("visible-slide")),
    buttons = Array.from(document.getElementsByClassName("block__button")),
    translate = 175;


var slider = {
    slides: ['b_happy_1.png', 'boy_copy.png'],
    frame: function() {
        var rand = 0 - 0.5 + Math.random() * ((this.slides.length - 1) - 0 + 1);
        rand = Math.round(rand);
        return rand;
    },

    set: function(image, index) {
        arrPic[index].setAttribute("src", "./assets/images/" + image);
        arrBox[index].style.left = translate * index + "px";
    },

    init: function() {
        this.set(this.slides[this.frame()], 0);
        this.set(this.slides[this.frame()], 1);
        this.set(this.slides[this.frame()], 2);
        this.set(this.slides[this.frame()], 3);
        this.set(this.slides[this.frame()], 4);
    },
    left: function() {
        // this.frame--;
        // if (this.frame < 0) this.frame = this.slides.length - 1;
        for (var i = 0; i < arrBox.length; i++) {
            if (arrBox[i].offsetLeft <= 0) {
                arrBox[i].classList.remove("first");
                arrBox[i].classList.add("last");
                this.set(this.slides[this.frame()], i);
                arrBox[i].style.left = translate * (arrBox.length - 1) + "px";
            }
            if (arrBox[i].offsetLeft == 525) {

                arrBox[i].style.left = (arrBox[i].offsetLeft - translate) + "px";
            }
            if (arrBox[i].offsetLeft == 350) {

                arrBox[i].style.left = (arrBox[i].offsetLeft - translate) + "px";
            }
            if (arrBox[i].offsetLeft == 700) {
                arrBox[i].classList.remove("last");
                arrBox[i].style.left = (arrBox[i].offsetLeft - translate) + "px";
            }
            if (arrBox[i].offsetLeft == 175) {
                arrBox[i].classList.add("first");
                arrBox[i].style.left = translate * 0 + "px";
            }

        }
    },
    right: function() {
        // this.frame++;
        // if (this.frame == this.slides.length) this.frame = 0;
        for (var i = 0; i < arrBox.length; i++) {

            if (arrBox[i].offsetLeft == 0) {
                arrBox[i].classList.remove("first");
                arrBox[i].style.left = translate + "px";
            }
            if (arrBox[i].offsetLeft == 175) {

                arrBox[i].style.left = (translate + arrBox[i].offsetLeft) + "px";
            }
            if (arrBox[i].offsetLeft == 350) {

                arrBox[i].style.left = (translate + arrBox[i].offsetLeft) + "px";
            }
            if (arrBox[i].offsetLeft >= 700) {
                arrBox[i].classList.remove("last");
                arrBox[i].classList.add("first");
                this.set(this.slides[this.frame()], i);
                arrBox[i].style.left = translate * 0 + "px";
            }
            if (arrBox[i].offsetLeft == 525) {
                arrBox[i].classList.add("last");
                arrBox[i].style.left = translate * (arrBox.length - 1) + "px";
            }

        }
    }
};
window.onload = function() {
    slider.init();
    // setInterval(function() { 
    // 	slider.right();
    // },5000);
};

buttons[0].addEventListener("click", function() { slider.left() });
buttons[1].addEventListener("click", function() { slider.right() });