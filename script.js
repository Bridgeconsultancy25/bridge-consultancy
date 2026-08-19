/* =========================================================
   BRIDGE CONSULTANCY — SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");

            const isOpen = navLinks.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        /* Close menu after clicking a link */
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';
            });

        });
    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


   /* =====================================================
   DARK / LIGHT THEME
===================================================== */

const themeButtons = document.querySelectorAll(".theme-btn");

/* Get saved theme */
let savedTheme = localStorage.getItem("bridgeTheme");

/* Default theme */
if (!savedTheme) {
    savedTheme = "light";
}


/* =====================================================
   APPLY THEME
===================================================== */

function setTheme(theme) {

    /* Validate theme */
    if (theme !== "dark" && theme !== "light") {
        theme = "light";
    }

    /* Apply theme to body */
    if (theme === "dark") {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }


    /* Update theme buttons */

    themeButtons.forEach(button => {

        const buttonTheme =
            button.getAttribute("data-theme");

        button.classList.toggle(
            "active",
            buttonTheme === theme
        );

    });


    /* Save preference */

    localStorage.setItem(
        "bridgeTheme",
        theme
    );


    /* Debug */

    console.log(
        "Bridge Consultancy Theme:",
        theme
    );
}


/* =====================================================
   INITIAL THEME
===================================================== */

setTheme(savedTheme);


/* =====================================================
   THEME BUTTON CLICK
===================================================== */

themeButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const selectedTheme =
            this.getAttribute("data-theme");

        setTheme(selectedTheme);

    });

});



/* =====================================================
   DARK / LIGHT THEME
===================================================== */

const themeButtons = document.querySelectorAll(".theme-btn");

/* Get saved theme */
let savedTheme = localStorage.getItem("bridgeTheme");

/* Default theme */
if (!savedTheme) {
    savedTheme = "light";
}


/* =====================================================
   APPLY THEME
===================================================== */

function setTheme(theme) {

    /* Validate theme */
    if (theme !== "dark" && theme !== "light") {
        theme = "light";
    }

    /* Apply theme to body */
    if (theme === "dark") {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }


    /* Update theme buttons */

    themeButtons.forEach(button => {

        const buttonTheme =
            button.getAttribute("data-theme");

        button.classList.toggle(
            "active",
            buttonTheme === theme
        );

    });


    /* Save preference */

    localStorage.setItem(
        "bridgeTheme",
        theme
    );


    /* Debug */

    console.log(
        "Bridge Consultancy Theme:",
        theme
    );
}


/* =====================================================
   INITIAL THEME
===================================================== */

setTheme(savedTheme);


/* =====================================================
   THEME BUTTON CLICK
===================================================== */

themeButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const selectedTheme =
            this.getAttribute("data-theme");

        setTheme(selectedTheme);

    });

});
    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".animate-element"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show-element"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        animatedElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {

            element.classList.add(
                "show-element"
            );

        });
    }


    /* =====================================================
       HERO IMAGE PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    const studentImage =
        document.querySelector(".student-main");

    if (
        heroVisual &&
        studentImage &&
        window.matchMedia(
            "(prefers-reduced-motion: no-preference)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const moveX =
                    (x / rect.width - 0.5) * 12;

                const moveY =
                    (y / rect.height - 0.5) * 12;

                studentImage.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;
            }
        );

        heroVisual.addEventListener(
            "mouseleave",
            () => {

                studentImage.style.transform =
                    "translate(0, 0)";
            }
        );
    }


    /* =====================================================
       DESTINATION CARD HOVER
    ===================================================== */

    const destinationCards =
        document.querySelectorAll(
            ".destination"
        );

    destinationCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.zIndex = "5";

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.zIndex = "";

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       FREE COUNSELLING BUTTON
       Redirects to student application page
    ===================================================== */

    const counsellingButtons =
        document.querySelectorAll(
            ".free-counselling"
        );

    counsellingButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                /*
                 * If your student form file is called
                 * student-form.html, this redirects there.
                 */

                event.preventDefault();

                window.location.href =
                    "student-form.html";

            }
        );

    });


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const whatsappNumber =
        "919133912200";

    const whatsappMessage =
        encodeURIComponent(
            "Hello Bridge Consultancy, I would like to know more about studying abroad."
        );

    const whatsappLinks =
        document.querySelectorAll(
            ".whatsapp-link"
        );

    whatsappLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                window.open(
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    });


    /* =====================================================
       CONTACT PHONE LINKS
    ===================================================== */

    const phoneLinks =
        document.querySelectorAll(
            ".phone-link"
        );

    phoneLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Calling Bridge Consultancy"
                );

            }
        );

    });


    /* =====================================================
       EMAIL LINKS
    ===================================================== */

    const emailLinks =
        document.querySelectorAll(
            ".email-link"
        );

    emailLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening Bridge Consultancy email"
                );

            }
        );

    });


    /* =====================================================
       ESC KEY — CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navLinks &&
                navLinks.classList.contains("open")
            ) {

                navLinks.classList.remove(
                    "open"
                );

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.innerHTML =
                        '<i class="fas fa-bars"></i>';
                }
            }

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cBridge Consultancy",
        "color:#00BFFF;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cConnecting Students to Global Education",
        "color:#D4A900;font-size:12px;"
    );

});