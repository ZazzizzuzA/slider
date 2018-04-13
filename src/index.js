import './styles/style';

let arrPic = Array.from(document.getElementsByClassName("block__item-slide_pic")),
    arrBox = Array.from(document.getElementsByClassName("block__item-slide")),
    arrVisSlide = Array.from(document.getElementsByClassName("visible-slide")),
    buttons = Array.from(document.getElementsByClassName("block__button"));

var slider = {
    slides: ['b_happy_1.png', 'boy_copy.png'],
    frame: function() {
        var rand = 0 - 0.5 + Math.random() * ((this.slides.length - 1) - 0 + 1);
        rand = Math.round(rand);
        return rand;
    },

    set: function(image, index) {
        arrPic[index].setAttribute("src", "./assets/images/" + image);
        // arrBox[index].style.transform = "translate(" + translate + "px)";
    },

    init: function() {
        this.set(this.slides[this.frame()], 0, );
        this.set(this.slides[this.frame()], 1, );
        this.set(this.slides[this.frame()], 2, );
        this.set(this.slides[this.frame()], 3, );
        this.set(this.slides[this.frame()], 4, );
    },
    left: function() {
        let translate = -160;
        for (let i = 0; i < arrVisSlide.length; i++) {
            arrVisSlide[i].left -= translate + "px";

        }
        // arrVisSlide[0].classList.remove("visible-slide");
        // arrVisSlide[0].classList.add("first", "hide");

        // Array.from(document.getElementsByClassName("first"))[0].classList.remove("first");
        // Array.from(document.getElementsByClassName("last"))[0].classList.remove("hide", "last");
        // Array.from(document.getElementsByClassName("first"))[0].classList.add("last");


        // if (this.frame < 0) this.frame = this.slides.length - 1;
        // this.set(this.slides[this.frame]);
    },
    right: function() {
        this.frame++;
        if (this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function() {
    slider.init();
    // setInterval(function() { 
    // 	slider.right();
    // },5000);
};

buttons[0].addEventListener("click", function() { slider.left() });