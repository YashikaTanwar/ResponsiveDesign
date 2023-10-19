const togglebtn=document.querySelector('.toggle_btn');
const dropdownmenu=document.querySelector('.dropdown-menu');

togglebtn.onclick=function()
{
    dropdownmenu.classList.toggle('open');
}