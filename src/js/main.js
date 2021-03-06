import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import accordions from './accordions';
import modals from './modals';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import merchSlider from './merchSlider';
import gallerySlider from './gallerySlider';
import scheduleSlider from './scheduleSlider';
import introSlider from './introSlider';
import pilotsSlider from './pilotsSlider';
import autoparkSlider from './autoparkSlider';
import menu from './menu';
import fancybox from './fancybox';
import teamPilotsSlider from './teamPilotsSlider';
import successSlider from './successSlider';
import results from './results';
import resultsShowMore from './resultsShowMore';
import otherNewsSlider from './otherNewsSlider';
import linkCopy from './linkCopy';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    merchSlider();
    gallerySlider();
    scheduleSlider();
    introSlider();
    pilotsSlider();
    autoparkSlider();
    menu();
    fancybox();
    teamPilotsSlider();
    successSlider();
    results();
    resultsShowMore();
    otherNewsSlider();
    linkCopy();
    
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
