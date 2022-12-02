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

    tabNameListPather.addEventListener('click', (event) => {
        const target = event.target; 
        if(target && event.target.matches('.tabheader__item')) {
            tabNameList.forEach((item, i)=> {
                if (target === item) {
                    hideTabContent();
                    showTabContent (i);
                }
            });
        }
    });
  
});