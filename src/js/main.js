window.addEventListener("DOMContentLoaded", () => {
    const tabContent = document.querySelectorAll(".tabcontent"),
        tabNameList = document.querySelectorAll(".tabheader__item"),
        tabNameListPather = document.querySelector(".tabheader");

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show");
        });

        tabNameList.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.add("show");
        tabContent[i].classList.remove("hide");
        tabNameList[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabNameListPather.addEventListener("click", (event) => {
        const target = event.target;
        if (target && event.target.matches(".tabheader__item")) {
            tabNameList.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    let intialTime = "2023-12-31";

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const total = Date.parse(endTime) - Date.parse(new Date());
        if (total <= 0) {
            [days, hours, minutes, seconds] = [0, 0, 0, 0];
        } else {
            days = Math.floor(total / (1000 * 60 * 60 * 24));
            hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((total / (1000 * 60)) % 60);
            seconds = Math.floor((total / 1000) % 60);
        }

        const timerData = { total, days, hours, minutes, seconds };

        return timerData;
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const timeInterval = setInterval(updateClock, 1000);

        function checkTime(value) {
            if (value >= 0 && value < 10) {
                return `0${value}`;
            } else {
                return value;
            }
        }

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.innerHTML = checkTime(t.days);
            hours.innerHTML = checkTime(t.hours);
            minutes.innerHTML = checkTime(t.minutes);
            seconds.innerHTML = checkTime(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        updateClock(); // сразу вызываем, чтобы не было видно подгрузки
    }
    setClock(".timer", intialTime);

    //Module window
    let btnOpenModal = document.querySelectorAll('[data-open]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

    btnOpenModal.forEach(el=> {
        el.addEventListener('click', ()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });});

    const close = () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'visible';
    };

    modalClose.addEventListener('click', close);

    modal.addEventListener('click', (e)=>{
        if(e.target === modal) {
            close();
        }
    });

    document.addEventListener('keydown',(e)=>{
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            close();
        }
    });
});
