const tabitems=document.querySelectorAll('.tab-item');
const tabContentitems=document.querySelectorAll('.tab-content-item');

function selectitem(e){
    removeBorder();
    removeShow();


    this.classList.add('tab-border');
    const tabContent=document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
}
function removeBorder(){
    tabitems.forEach(item=>item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentitems.forEach(item=>item.classList.remove('show'));
}

tabitems.forEach(item=>item.addEventListener('click',selectitem));