window.addEventListener("DOMContentLoaded", function() {

  'use strict';

  let tab = document.querySelectorAll(".info-header-tab"),
      info = document.querySelector(".info-header"),
      tabContent = document.querySelectorAll(".info-tabcontent");
  
  function hideTabContent (a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent (b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

//timer

let deadline = "2018-10-21";

function getTimeRemaining(endtime) {
  let t = (Date.parse(endtime) > Date.parse(new Date())) ? Date.parse(endtime) - Date.parse(new Date()) : 0,
      seconds = Math.floor((t/1000) % 60),
      minutes = Math.floor((t/1000/60) % 60),
      hours = Math.floor((t/(1000*60*60)));

      return {
        "total" : t,
        "hours" : (hours < 10) ? '0' + hours : hours,
        "minutes" : (minutes < 10) ? '0' + minutes : minutes,
        "seconds" : (seconds < 10) ? '0' + seconds : seconds,
      };
}

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock("timer", deadline);

  // Modal

  let more = document.querySelector(".more"),
      overlay = document.querySelector(".overlay"),
      close = document.querySelector(".popup-close"),
      descriptionBtn = document.querySelectorAll(".description-btn");

  more.addEventListener('click', function() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });
  close.addEventListener('click', function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
  descriptionBtn.forEach(descriptionBtn =>
    descriptionBtn.addEventListener('click', function() {
    overlay.style.display = "block";
    more.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }));
  console.log(descriptionBtn);

  //form

  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };
  let form = document.querySelectorAll("form"),
      inputs = document.querySelectorAll("input"),
      statusMessage = document.createElement("div");

      statusMessage.classList.add("status");

      form.forEach(elem => {
        elem.addEventListener('submit', (event) => {
            sendFormData(event);
        });
    });

      inputs.forEach(elem => {
        if (elem.getAttribute('type') === 'tel') {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^+0-9]/, '').slice(0, 12);
            });
        } 
    });


    let sendFormData = (event) => {
        event.preventDefault();
        event.target.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(event.target);
        request.send(formData);

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });
    for (let i = 0; i < input.length; i++) {
      input[i],value = "";
      }
  };
});



