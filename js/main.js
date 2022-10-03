console.log('ok 1');
//header
function hideheader(){
    let $slider = document.querySelector('.slider')
    let $header = document.querySelector('header')
    let scrollTop = document.querySelector('html').scrollTop;
    if(scrollTop >($slider.offsetHeight - $header.offsetHeight)){

        $header.style.transform = 'scaleY(1)'
        $header.style.transformOrigin = 'center top'
        // $header.style.display = 'block'
    }else{
        // $header.style.display = 'none'
        $header.style.transform = 'scaleY(0)'
        $header.style.transformOrigin = 'top center'
    }
}
hideheader();
window.addEventListener('scroll',hideheader)
//nav
let $btn_menu = document.querySelector('.head-active .logo-active')
let $nav = document.querySelector('.nav')
let $menu_col = document.querySelector('.nav .menu-col')
let $menu_close = document.querySelector('.body-logo .close-nav')

$btn_menu.addEventListener('click',function(){
    $nav.style.display = 'block'
    setTimeout(function(){
        $menu_col.style.transformOrigin = 'left center'
        $menu_col.style.transform = 'scaleX(1)'
    },0)

})
$menu_close.addEventListener('click',function(){
    $menu_col.style.transform = 'scaleX(0)'
    $menu_col.style.transformOrigin = 'center left'
    setTimeout(function(){
        $nav.style.display = 'none'
    },300)
})
// $nav.addEventListener('click',function(){
//     $menu_col.style.transform = 'scaleX(0)'
//     $menu_col.style.transformOrigin = 'center left'
//     setTimeout(function(){
//         $nav.style.display ='none'
//     },300)
// })
// //SliderTo
let $menu= document.querySelectorAll('.body-menu ul li')
let $slider1 = document.querySelector('.slider__image #id01')
let $slider2 = document.querySelector('.slider__image #id02')
let $slider3 = document.querySelector('.slider__image #id03')
$menu.forEach((e) =>{
    e.addEventListener('click',function(e){
        console.log('click')
        let menudata = this.getAttribute('data-menu')
        if(menudata == 'id1'){
            $slider1.classList.add('active')
            $slider2.classList.remove('active')
            $slider3.classList.remove('active')
        }
        else if(menudata == 'id2'){
            $slider1.classList.remove('active')
            $slider2.classList.add('active')
            $slider3.classList.remove('active')
        }
        else if(menudata == 'id3'){
            $slider1.classList.remove('active')
            $slider2.classList.remove('active')
            $slider3.classList.add('active')
        }
    })
})
//backtop
let $backtop = document.querySelector('.back-to-top')
$backtop.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: 'smooth'
    })
})
