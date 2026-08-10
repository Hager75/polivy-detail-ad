const BODY_ELEMENT = document.getElementById("main-body");
const START_BTN_LANDING = document.querySelector(".landing__startBtn");
const LANDING_PAGE = document.querySelector(".landing-page");
const NAV_PAGE = document.querySelector(".nav-page");
const PRESTART_PAGE = document.querySelector(".prestart-page");
const MAIN_PAGE = document.querySelector(".main");
const START_BTN = document.querySelector(".prestart__btn");
const PREV_BTNS = document.querySelectorAll(".nav-prev");
const NEXT_BTNS = document.querySelectorAll(".nav-next");
const HOME_BTN = document.querySelector(".home-btn");

const HEMATOLOGY_BTNS = document.querySelectorAll(".hematology-btns");
const MECHANISM_BTNS = document.querySelectorAll(".mechanism-btns");
const PATIENT_BTNS = document.querySelectorAll(".patient-btns");
const PFS_BTNS = document.querySelectorAll(".pfs-btns");
const YEARS_BTNS = document.querySelectorAll(".years-btns");
const NAV_BTNS_ACTIVE = document.querySelectorAll(".nav-btn-active");
const HEMATOLOGY_BTNS_ACTIVE = document.querySelector(".first-btn");
const MECHANISM_ACTIVE = document.querySelector(".second-btn");
const PATIENT_ACTIVE = document.querySelector(".third-btn");
const PFS_ACTIVE = document.querySelector(".fourth-btn");
const YEARS_ACTIVE = document.querySelector(".fifth-btn");

const FIRST_PATIENT = document.querySelector(".patient-1");
const SECOND_PATIENT = document.querySelector(".patient-2");
const THIRD_PATIENT = document.querySelector(".patient-3");
const MODAL = document.getElementById("mainDialog");
const PREV_BTN_SLIDE = document.querySelector(".prev-slider");
const NEXT_BTN_SLIDE = document.querySelector(".next-slider");


let currentPage = 1;
let currentPatientProfile = 1;
const ACTIVE_MAIN_PAGE = {
  4: document.querySelectorAll(".hematology-items"),
  5: document.querySelectorAll(".mechanism-items"),
  6: document.querySelectorAll(".patient-items"),
  7: document.querySelectorAll(".pfs-items"),
  8: document.querySelectorAll(".years-items"),
};

const ACTIVE_BTNS = {
  4: HEMATOLOGY_BTNS_ACTIVE,
  5: MECHANISM_ACTIVE,
  6: PATIENT_ACTIVE,
  7: PFS_ACTIVE,
  8: YEARS_ACTIVE,
};

const PATIENT_INFO_MODAL = {
  1: document.querySelectorAll(".patient-1-items .patient-slide"),
  2: document.querySelectorAll(".patient-2-items .patient-slide"),
  3: document.querySelectorAll(".patient-3-items .patient-slide"),
};


let currentSlide = 0;

const IMAGES = [
  "./images/roche-blue.svg",
  "./images/roche-white.svg",
  "./images/logo-polivy-white.svg",
  "./images/logo-blue.svg",
  "./images/landing-header.png",
  "./images/qr-top.svg",
  "./images/qr-bottom.svg",
  "./images/start-btn.svg",
  "./images/start-btn-active.svg",
  "./images/start-btn-icon.svg",
  "./images/pre-btn-white.svg",
  "./images/next-btn-white.svg",
  "./images/Asset 18.svg",
  "./images/Asset 30.svg",
  "./images/Asset 28.svg",
  "./images/Asset 25.svg",
  "./images/Asset 23.svg",
  "./images/Asset 21.svg",
  "./images/homw.svg",
  "./images/prev-btn-red.svg",
  "./images/next-btn-red.svg",
  "./images/nav-v2.svg",
  "./images/Asset 32.svg",
  "./images/active-btn.svg",
  "./images/Asset 26.svg",
  "./images/Asset 24.svg",
  "./images/Asset 22.svg",
  "./images/close.svg",
  "./images/11@2x.png",
  "./images/1-2@2x.png",
  "./images/1-1@2x.png",
  "./images/22@2x.png",
  "./images/2-1@2x.png",
  "./images/2-2@2x.png",
  "./images/33@2x.png",
  "./images/3-1@2x.png",
  "./images/main-01.png",
  "./images/blue-bg-02.png",
  "./images/gr-03.png"
];