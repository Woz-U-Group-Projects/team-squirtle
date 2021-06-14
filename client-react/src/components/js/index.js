import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from '../../serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//$(document).ready(function(){

//$nav = $('.nav');
//$toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
//$toggleCollapse.click(function(){
//$nav.toggleClass('collapse');
//    })

//owl-carousel for blog
//$('.owl-carousel').owlCarousel();
//   loop:true,
//   autoplay:true,
//  autoplayTimeout:3000,
//    dots:false,
//    nav:true,
//    navText: [$('.owl-navigation.owl-nav-prev'),
//    $('owl-navigation.owl-nav-next')]
//});

//click to scroll top
//$('.move-up span').click(function(){
//    $('html,body').animate({
//        scrollTop: 0
//    },1000);
//    })
//}
//});