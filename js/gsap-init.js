document.addEventListener("DOMContentLoaded", function() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.error("GSAP або ScrollTrigger не завантажені!");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ЕФЕКТ ДО СЕКЦІЙ
    gsap.utils.toArray("section").forEach((section) => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, 
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                } 
            }
        );
    });

    // ЕФЕКТ ДО ЗАГОЛОВКІВ
    document.querySelectorAll(".split-text").forEach((textBlock) => {
        if (window.innerWidth >= 768) {
            // Для екранів ≥768px: розбиваємо текст на літери
            let text = new SplitType(textBlock, { types: "chars, words" });

            gsap.from(text.chars, {
                opacity: 0,
                y: 50,
                rotateX: 90,
                stagger: 0.05,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textBlock,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        } else {
            // Для мобільних: плавна поява без розрізу
            gsap.from(textBlock, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textBlock,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });
        }
    });

    document.querySelectorAll(".point-value").forEach((el, index) => {
        let numberElement = el.querySelector(".number"); // Отримуємо span з числом
        let endValue = parseInt(numberElement.textContent, 10); // Отримуємо число з span
        
        gsap.fromTo(numberElement, 
            { textContent: 0, opacity: 0, y: 20 }, 
            {
                textContent: endValue,
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
                delay: index * .7,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                snap: { textContent: 1 },
                onUpdate: function () {
                    numberElement.textContent = Math.floor(gsap.getProperty(numberElement, "textContent")); // Оновлюємо число
                }
            }
        );
    });

});