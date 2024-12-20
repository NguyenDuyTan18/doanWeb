

// header-bar-menu
    const header_nav = document.querySelector('.header-nav');
    const mobilebar = document.querySelector('.menu-bar');
    const heightmenu = header_nav.clientHeight;
    
    mobilebar.onclick = () => {
        let isClose = header_nav.clientHeight === heightmenu;
        if(isClose){
            header_nav.style.height = 'auto';
        }
        else {
            header_nav.style.height = null;
        }
    }
 // header-bar-menu responsive

 // banner 
 
 let index__banner = 1;
    const changeImage = () => {
        let imgs = ["./trangchu/assets/imgs/banner-img/banner--one.png", 
                    "./trangchu/assets/imgs/banner-img/banner--two.png", 
                    "./trangchu/assets/imgs/banner-img/banner--three.png", 
                    "./trangchu/assets/imgs/banner-img/banner--four.png",
                    "./trangchu/assets/imgs/banner-img/banner--five.png",
                    "./trangchu/assets/imgs/banner-img/banner--six.png"
                ];
        document.getElementById('banner-img').src = imgs[index__banner]
        index__banner++;
        if(index__banner == 6){
            index__banner = 0;
        }
    } 
    setInterval(changeImage,5000)
// banner 
// main
    // main--introduce
    const container = document.querySelector('.main-introduce__container-one');
    const container_two = document.querySelector('.main-introduce__container-two');
    const hotdealbutton = document.querySelector('.main-introduce__button--one');
    const newbutton = document.querySelector(".main-introduce__button--two")
    const introduce_onebuttom = document.querySelector(".main-introduce__list--content-one");
    const introduce_twobuttom = document.querySelector(".main-introduce__list--content-two")

    // làm xuất hiện hotdeal hoặc sắp ra mắt
    function showHotdeal(){
        introduce_onebuttom.classList.add('open');
        introduce_twobuttom.classList.remove("open");
        hotdealbutton.classList.add('border-js');
        newbutton.classList.remove('border-js');
    }
    function showNew(){
        introduce_twobuttom.classList.add('open');
        introduce_onebuttom.classList.remove("open");
        hotdealbutton.classList.remove('border-js');
        newbutton.classList.add('border-js');

    }
    
    hotdealbutton.addEventListener('click', showHotdeal);
    newbutton.addEventListener('click', showNew);
    
    // làm xuất hiện hotdeal hoặc sắp ra mắt
    // trượt của hotdeal
    let index__introduce = 0;  
    function showSlide(index){ 
        const totalcontainer = container.children.length; 
        console.log(totalcontainer)
        if(index >= totalcontainer  ){
            index__introduce = 0;
        }
        else if(index < 0){
            index__introduce = totalcontainer - 1;
        }
        else {
            index__introduce = index;
        }
        console.log(index__introduce)
        const containerWidth = container.children[0].clientWidth 
        console.log(containerWidth);
        container.style.transform = `translateX(${- index__introduce * containerWidth}px)`; 
    }
    function moveSlide(step){
        showSlide(index__introduce + step) 
    }

    setInterval( ()=>{
        index__introduce++;
        showSlide(index__introduce); 
    }, 5000)
    // trượt của hotdeal


    // trượt của sắp ra mắt
    let index__introduce_two = 0;
    
    function showSlide_two(index){
        const totalcontainer_two = container_two.children.length;
        console.log(totalcontainer_two)
        if(index >= totalcontainer_two  ){
            index__introduce_two = 0;
        }
        else if(index < 0){
            index__introduce_two = totalcontainer_two - 1;
        }
        else {
            index__introduce_two = index;
        }
        console.log(index__introduce_two)
        const containerWidth_two = container_two.children[0].clientWidth
        console.log(containerWidth_two);
        container_two.style.transform = `translateX(${-index__introduce_two * containerWidth_two}px)`;
    }
    function moveSlide_two(step){
        showSlide_two(index__introduce_two + step)
    }
    
    setInterval( ()=>{
        index__introduce_two++;
        showSlide_two(index__introduce_two);
    }, 5000)
    // trượt của sắp ra mắt
    
    window.onload = () => {
        introduce_onebuttom.classList.add('open');
        hotdealbutton.classList.add('border-js');
    }
    // main--introduce

    // main--email
    const emailButton = document.querySelector('.main-content--sub-email');
    const h2Button = document.querySelector('.main h2')
    let colorEmail ;
    setInterval(()=>{
        setTimeout(()=>{
            colorEmail = '#ffffff'
            emailButton.style.color= colorEmail;
        }, 500)

        setTimeout(()=>{
            colorEmail = '#000000'
            emailButton.style.color= colorEmail;
        }, 1000)
        
        setTimeout(() => {
            colorEmail = '#FFFF00'
            emailButton.style.color = colorEmail
        }, 2000)


        setTimeout(() => {
            colorEmail = '#00FF00'
            emailButton.style.color = colorEmail
        }, 4000)
    }, 3000)


    // main--email

// main
    
// footer
    const likebutton = document.querySelector('.icon-like');
    let likeText = Math.floor(Math.random() * (1000 - 10) + 10);
    console.log(likeText)
    likebutton.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${likeText}K`
// footer
    

//modal
    const gift1 = document.querySelector('.img1');
    const gift2 = document.querySelector('.img2');
    const thankButton = document.querySelector('.icon-thank');
    const closeThankButton = document.querySelector('.close-thank-button');
    const modalButton = document.querySelector('.modal-thank');

    function showModal() {
        gift1.classList.add('close-block');
        gift2.classList.add('open-block');
        modalButton.classList.add('openflex');

    }

    function closeModal(){
        modalButton.classList.remove('openflex');
    }
    thankButton.addEventListener('click',showModal);
    closeThankButton.addEventListener('click', closeModal);
    modalButton.addEventListener('click', closeModal)
//modal




$(document).ready(function(){
    $('.main__list--products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
         
      });
  });