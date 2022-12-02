window.addEventListener('DOMContentLoaded', () =>{
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabNameList = document.querySelectorAll('.tabheader__item'),
          tabNameListPather = document.querySelector('.tabheader'); 

    function hideTabContent () {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });

        tabNameList.forEach (item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent (i = 0) {
        tabContent[i].style.display = 'block';
        tabNameList[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent ();

  
});