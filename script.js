// ==========================================
// 🎁 HAPPY BIRTHDAY
// MỞ HỘP QUÀ → PHÁT NHẠC
// ==========================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ==============================
        // LẤY CÁC PHẦN TỪ HTML
        // ==============================

        const giftBox =
            document.getElementById("giftBox");

        const giftScreen =
            document.getElementById("giftScreen");

        const birthdayContent =
            document.getElementById("birthdayContent");

        const music =
            document.getElementById("birthdayMusic");

        const musicButton =
            document.getElementById("musicButton");


        // ==============================
        // TRẠNG THÁI BAN ĐẦU
        // ==============================

        birthdayContent.classList.remove("show");

        musicButton.style.display = "none";


        // ==============================
        // CLICK MỞ HỘP QUÀ
        // ==============================

        giftBox.addEventListener(
            "click",
            function () {


                // --------------------------
                // NGĂN BẤM NHIỀU LẦN
                // --------------------------

                if (
                    giftBox.classList.contains("open")
                ) {
                    return;
                }


                // --------------------------
                // MỞ HỘP
                // --------------------------

                giftBox.classList.add("open");


                // --------------------------
                // PHÁT NHẠC
                // --------------------------

                music.volume = 0.35;

                music.loop = true;


                music.play()
                    .then(function () {

                        console.log(
                            "🎵 Nhạc đang phát!"
                        );

                    })
                    .catch(function (error) {

                        console.log(
                            "Không thể phát nhạc:",
                            error
                        );

                    });


                // --------------------------
                // SAU 1 GIÂY
                // HIỆN TRANG SINH NHẬT
                // --------------------------

                setTimeout(
                    function () {


                        giftScreen.classList.add(
                            "hide"
                        );


                        birthdayContent.classList.add(
                            "show"
                        );


                        musicButton.style.display =
                            "block";


                        // ----------------------
                        // CUỘN VỀ ĐẦU TRANG
                        // ----------------------

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });


                        // ----------------------
                        // BẮT ĐẦU HIỆU ỨNG
                        // ----------------------

                        createConfetti();


                    },
                    1200
                );

            }
        );


        // ==================================
        // NÚT NHẠC GÓC PHẢI
        // ==================================

        musicButton.addEventListener(
            "click",
            function () {


                if (music.paused) {


                    music.play()
                        .then(function () {

                            musicButton.innerHTML =
                                "🔊";

                        });


                } else {


                    music.pause();

                    musicButton.innerHTML =
                        "🎵";

                }

            }
        );


        // ==================================
        // CONFETTI
        // ==================================

        function createConfetti() {


            const symbols = [
                "🎉",
                "✨",
                "💗",
                "💕",
                "🌸",
                "🎀"
            ];


            for (
                let i = 0;
                i < 35;
                i++
            ) {


                const confetti =
                    document.createElement(
                        "div"
                    );


                confetti.innerText =
                    symbols[
                        Math.floor(
                            Math.random()
                            * symbols.length
                        )
                    ];


                confetti.style.position =
                    "fixed";


                confetti.style.left =
                    Math.random() * 100 + "vw";


                confetti.style.top =
                    "-40px";


                confetti.style.fontSize =
                    (15 + Math.random() * 20)
                    + "px";


                confetti.style.zIndex =
                    "9999";


                confetti.style.pointerEvents =
                    "none";


                confetti.style.transition =
                    "transform 3s linear, opacity 3s";


                document.body.appendChild(
                    confetti
                );


                setTimeout(
                    function () {


                        confetti.style.transform =
                            "translateY(110vh) rotate(360deg)";


                        confetti.style.opacity =
                            "0";


                    },
                    100
                );


                setTimeout(
                    function () {

                        confetti.remove();

                    },
                    3500
                );

            }

        }


    }
);
/* =====================================
   BIRTHDAY CAKE - BLOW CANDLE
===================================== */

const blowCandleBtn = document.getElementById("blowCandleBtn");
const birthdayWish = document.getElementById("birthdayWish");
const blowHint = document.getElementById("blowHint");
const candles = document.querySelectorAll(".candle");

let candlesBlown = false;


/* ================================
   KHI NHẤN NÚT THỔI NẾN
================================ */

if (blowCandleBtn) {

    blowCandleBtn.addEventListener("click", function () {

        if (candlesBlown) return;

        candlesBlown = true;

        /* TẮT TẤT CẢ NGỌN NẾN */

        candles.forEach(function(candle, index) {

            setTimeout(function() {

                candle.classList.add("blown");

            }, index * 200);

        });


        /* ĐỔI NỘI DUNG NÚT */

        blowCandleBtn.innerHTML = "✨ Điều ước đã được gửi đi!";

        blowCandleBtn.disabled = true;

        blowCandleBtn.style.opacity = "0.8";


        /* ĐỔI HƯỚNG DẪN */

        if (blowHint) {

            blowHint.innerHTML =
                "💫 Điều ước của cậu đã được gửi đến vũ trụ!";

        }


        /* BẮN PHÁO GIẤY */

        createConfetti();


        /* HIỆN LỜI CHÚC */

        setTimeout(function() {

            if (birthdayWish) {

                birthdayWish.classList.remove("hidden");

                birthdayWish.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }, 1200);

    });

}


/* ================================
   TẠO CONFETTI
================================ */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    if (!container) return;


    /* XÓA CONFETTI CŨ */

    container.innerHTML = "";


    /* TẠO 100 MẢNH */

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");


        /* VỊ TRÍ NGẪU NHIÊN */

        confetti.style.left =
            Math.random() * 100 + "%";


        /* KÍCH THƯỚC */

        const size =
            Math.random() * 8 + 6;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.5 + "px";


        /* ĐỘ TRỄ */

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        /* THỜI GIAN */

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        /* MÀU */

        const colors = [
            "#ff6b9a",
            "#ffd166",
            "#ff9f1c",
            "#9b5de5",
            "#00bbf9",
            "#06d6a0"
        ];

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        container.appendChild(confetti);

    }


    /* XÓA SAU 5 GIÂY */

    setTimeout(function() {

        container.innerHTML = "";

    }, 5000);

}