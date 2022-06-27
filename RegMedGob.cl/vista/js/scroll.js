const scrollOffset = 200;

const scrollElement = document.getElementsByClassName('js-scroll');

const elementInView = (el, offset = 0) => {
    const elementTop = el[0].getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = () => {

    /* [].forEach.call(scrollElement, function (el) {
        el.classList.add('scrolled');
    }); */

    /* scrollElement.classList.add('scrolled'); */
    /* document.getElementById("scroll").className = 'scroll-element js-scroll slide-right scrolled' */
}

const hideScrollElement = () => {

    /* [].forEach.call(scrollElement, function(el){
        el.classList.remove('scrolled');
    }); */

    /* scrollElement.classList.remove('scrolled'); */
    for (i = 0; i < scrollElement.length; i++){
        if(!scrollElement[i].classList.contains('fade-in-bottom')){
            document.getElementById("scroll").className = 'scroll-element js-scroll fade-in-bottom'
        }
        if (!scrollElement[i].classList.contains('slide-right')) {
            document.getElementById("scroll").className = 'scroll-element js-scroll slide-right'
        }
    }

}

const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
    } else {
        hideScrollElement();
    }
}

//initialize throttleTimer as false
let throttleTimer = false;

const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;

    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;

    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
    }, time);
}

window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250);
})