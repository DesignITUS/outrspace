$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    //   obj1
    if (scroll > 500) {
        $(".obj1").css("right", - screen.width + scroll - 500);
    }
});

var flag = 0;
const setShadow = () => {
    let randomnumber = Math.random();
    let displace = 1.0 + randomnumber * 3.0;
    var shadow = `${displace}px ${displace / 4}px 0.5px #00bfff60, ${-displace}px ${-displace / 4}px 0.5px #ff320060, 0px 0px 4px #ffffff40`;
    if (flag == 0 || flag == 1) {

    } else {
        shadow = `0px 0px 0.5px #00bfff50, 0px 0px 0.5px #ff320050, 0px 0px 4px #ffffff40`;
    }
    if (randomnumber > 0.5) {
        flag = flag + 1;
    }
    if (flag == 10) {
        flag = 0;
    }
    var i;
    for (i = 0; i < 3; i++) {
        document.getElementsByClassName("glitch-text")[i].style.textShadow = shadow;
    }
};

setInterval(setShadow, 200);