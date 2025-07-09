let hero = document.querySelector('.hero');
let slider = document.querySelector('.slider');
let animation = document.querySelector('section.animation-wrapper');

const time_line = new TimelineMax();

// parameter1 是要控制的對象
// parameter2 是duration
// parameter3 是控制對象的原始狀態
// parameter4 是控制對象的動畫結束後的狀態
// parameter5 "-=1.2" 是提早1.2秒跑
time_line
    .fromTo(hero, 1, {height: '0%'}, {height: '100%', ease: Power2.easeInOut})
    .fromTo(hero, 1.2, {width: '80%'}, {width: '100%', ease: Power2.easeInOut})
    .fromTo(slider, 1, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut},"-=1.2")
    .fromTo(animation, 0.3, {opacity: 1}, {opacity: 0});


// 上面動畫所花的實際時間為1+1.2+0.3 = 2.5秒
// 這裡設定2.5秒後，讓動畫區塊無法點擊
setTimeout(() => {
    animation.style.pointerEvents = 'none';
}, 2500);
