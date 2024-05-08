document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0; // 초기 슬라이드 인덱스를 0으로 설정합니다.
    const slides = document.querySelectorAll('.slider-container img');
    const totalSlides = slides.length;
    const intervalTime = 5000; // 이미지 변경 간격을 5초로 설정합니다.
    const transitionDuration = 50; // 페이드 효과의 지속 시간을 0.25초로 설정합니다.
    let slideInterval; // 자동 슬라이드 변경을 위한 변수 선언

    showSlide(currentSlide);

    function showSlide(n) {
        if (n < 0) {
            currentSlide = totalSlides - 1;
        } else if (n >= totalSlides) {
            currentSlide = 0;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0; // 이미지를 투명하게 만듭니다.
            slides[i].style.display = "none"; // 이미지를 완전히 숨깁니다.
        }
        slides[currentSlide].style.display = "block"; // 선택된 이미지를 보여줍니다.
        fadeIn(slides[currentSlide], transitionDuration); // 선택된 이미지를 서서히 나타나게 합니다.
    }

    // 이미지를 서서히 나타나게 하는 함수
    function fadeIn(element, duration) {
        let opacity = 0;
        const startTime = performance.now();

        function fade() {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            opacity = (elapsedTime / duration);

            if (opacity < 1) {
                element.style.opacity = opacity;
                requestAnimationFrame(fade);
            } else {
                element.style.opacity = 1;
            }
        }

        fade();
    }

    // 다음 슬라이드로 이동하는 함수
    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // 이전 슬라이드로 이동하는 함수
    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // 자동으로 다음 슬라이드로 이동하는 타이머 설정
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // 자동 슬라이드 변경 시작
    startSlideInterval();

    // 이전 버튼 클릭 시 이벤트 처리
    document.querySelector('.prev').addEventListener('click', function (event) {
        event.preventDefault();
        prevSlide();
        clearInterval(slideInterval); // 이전 버튼 클릭 시 타이머 초기화
        setTimeout(startSlideInterval, transitionDuration); // 효과가 끝난 후 다시 자동 변경 시작
    });

    // 다음 버튼 클릭 시 이벤트 처리
    document.querySelector('.next').addEventListener('click', function (event) {
        event.preventDefault();
        nextSlide();
        clearInterval(slideInterval); // 다음 버튼 클릭 시 타이머 초기화
        setTimeout(startSlideInterval, transitionDuration); // 효과가 끝난 후 다시 자동 변경 시작
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkboxSwitch");
    const elementsToHide = document.querySelectorAll(".return-date");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            elementsToHide.forEach(function (element) {
                element.style.display = "none"; // 요소를 숨깁니다.
            });
        } else {
            elementsToHide.forEach(function (element) {
                element.style.display = "flex"; // 요소를 보이게 합니다.
            });
        }
    });
});