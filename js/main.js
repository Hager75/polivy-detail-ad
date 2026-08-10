const switchPage = (pageToShow, pageToHide) => {
  pageToShow.style.display = "flex";
  pageToHide.style.display = "none";
  pageToShow.classList.add("fade-in");
};

const setMainContentVisibility = (page, display) => {
  ACTIVE_MAIN_PAGE[page]?.forEach((item) => {
    item.style.display = display;
  });
};

function showSlide(index) {
  PATIENT_INFO_MODAL[currentPatientProfile][currentSlide].classList.remove(
    "active"
  );
  currentSlide = index;
  PATIENT_INFO_MODAL[currentPatientProfile][currentSlide].classList.add(
    "active"
  );
}

NEXT_BTN_SLIDE.addEventListener("click", () => {
  const nextSlide =
    (currentSlide + 1) % PATIENT_INFO_MODAL[currentPatientProfile].length;
  showSlide(nextSlide);
});

PREV_BTN_SLIDE.addEventListener("click", () => {
  const prevSlide =
    (currentSlide - 1 + PATIENT_INFO_MODAL[currentPatientProfile].length) %
    PATIENT_INFO_MODAL[currentPatientProfile].length;
  showSlide(prevSlide);
});

MODAL.addEventListener("close", () => {
  PATIENT_INFO_MODAL[currentPatientProfile][currentSlide].classList.remove(
    "active"
  );
  currentSlide = 0;
});

HEMATOLOGY_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(MAIN_PAGE, NAV_PAGE);
    } else if (currentPage > 4 && currentPage < 9) {
      setMainContentVisibility(currentPage, "none");
    }
    currentPage = 4;
    HEMATOLOGY_BTNS_ACTIVE?.classList.add("active");
    setMainContentVisibility(currentPage, "flex");
  });
});

MECHANISM_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(MAIN_PAGE, NAV_PAGE);
    } else if (currentPage > 3 && currentPage < 9) {
      setMainContentVisibility(currentPage, "none");
    }
    currentPage = 5;
    MECHANISM_ACTIVE?.classList.add("active");
    setMainContentVisibility(currentPage, "flex");
  });
});

PATIENT_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(MAIN_PAGE, NAV_PAGE);
    } else if (currentPage > 3 && currentPage < 9) {
      setMainContentVisibility(currentPage, "none");
    }
    currentPage = 6;
    PATIENT_ACTIVE?.classList.add("active");
    setMainContentVisibility(currentPage, "flex");
  });
});

PFS_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(MAIN_PAGE, NAV_PAGE);
    } else if (currentPage > 3 && currentPage < 9) {
      setMainContentVisibility(currentPage, "none");
    }
    currentPage = 7;
    PFS_ACTIVE?.classList.add("active");
    setMainContentVisibility(currentPage, "flex");
  });
});

YEARS_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(MAIN_PAGE, NAV_PAGE);
    } else if (currentPage > 3 && currentPage < 9) {
      setMainContentVisibility(currentPage, "none");
    }
    currentPage = 8;
    YEARS_ACTIVE?.classList.add("active");
    setMainContentVisibility(currentPage, "flex");
  });
});

NAV_BTNS_ACTIVE.forEach((btn) => {
  btn.addEventListener("click", () => {
    NAV_BTNS_ACTIVE.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  });
});

START_BTN_LANDING.addEventListener("click", function (e) {
  switchPage(PRESTART_PAGE, LANDING_PAGE);
  currentPage++;
});

START_BTN.addEventListener("click", function (e) {
  switchPage(NAV_PAGE, PRESTART_PAGE);
  currentPage++;
});

HOME_BTN.addEventListener("click", function (e) {
  location.reload();
});

NEXT_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(MAIN_PAGE, NAV_PAGE);
      currentPage++;
      ACTIVE_BTNS[currentPage].classList.add("active");
      setMainContentVisibility(currentPage, "flex");
    } else if (currentPage > 3 && currentPage < 8) {
      setMainContentVisibility(currentPage, "none");
      ACTIVE_BTNS[currentPage].classList.remove("active");
      currentPage++;
      ACTIVE_BTNS[currentPage].classList.add("active");
      setMainContentVisibility(currentPage, "flex");
    }
  });
});

PREV_BTNS.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (currentPage === 3) {
      switchPage(PRESTART_PAGE, NAV_PAGE);
      NAV_BTNS_ACTIVE.forEach((btn) => btn.classList.remove("active"));
      currentPage--;
    } else if (currentPage === 4) {
      switchPage(NAV_PAGE, MAIN_PAGE);
      ACTIVE_BTNS[currentPage].classList.remove("active");
      setMainContentVisibility(currentPage, "none");
      currentPage--;
    } else if (currentPage > 4 && currentPage < 9) {
      setMainContentVisibility(currentPage, "none");
      ACTIVE_BTNS[currentPage].classList.remove("active");
      currentPage--;
      setMainContentVisibility(currentPage, "flex");
      ACTIVE_BTNS[currentPage].classList.add("active");
    }
  });
});

function closeDialog() {
  mainDialog.classList.add("is-closing");

  mainDialog.addEventListener(
    "transitionend",
    () => {
      mainDialog.close();
      mainDialog.classList.remove("is-closing");
    },
    { once: true }
  );
}

FIRST_PATIENT.addEventListener("click", function (e) {
  currentPatientProfile = 1;
  PATIENT_INFO_MODAL[currentPatientProfile][currentSlide].classList.add(
    "active"
  );
  console.log(PATIENT_INFO_MODAL[currentPatientProfile][currentSlide]);
  MODAL.showModal();
  MODAL.focus();
});

SECOND_PATIENT.addEventListener("click", function (e) {
  currentPatientProfile = 2;
  MODAL.showModal();
  MODAL.focus();
  PATIENT_INFO_MODAL[currentPatientProfile][currentSlide].classList.add(
    "active"
  );
});

THIRD_PATIENT.addEventListener("click", function (e) {
  currentPatientProfile = 3;
  MODAL.showModal();
  MODAL.focus();
  PATIENT_INFO_MODAL[currentPatientProfile][currentSlide].classList.add(
    "active"
  );
});

function preloadAssets() {
  return new Promise((resolve) => {
    let loaded = 0;
    const total = IMAGES.length;

    if (total === 0) resolve();

    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = img.onerror = () => {
        loaded++;

        // optional progress
        // console.log(`Loaded: ${loaded}/${total}`);

        if (loaded === total) {
          resolve();
        }
      };
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await preloadAssets();
    BODY_ELEMENT.classList.add("loaded");
    // setTimeout(function () {
    // }, 1000);
  } catch (e) {
    console.error("Preload failed", e);
    loader.classList.add("loaded"); // fail-safe
  }
});
