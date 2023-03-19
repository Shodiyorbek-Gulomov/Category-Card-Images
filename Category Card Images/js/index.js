const navbarMenu = document.querySelector('.content-title .icon-menu')
    navbarItems = document.querySelector('.content-title .nav-items')
    filterItem2 = document.querySelector('.sidebar-category')
    filterItems = document.querySelector('.navbar-menu')
    filterImg = document.querySelectorAll('.images')

navbarMenu.addEventListener('click', () => {
    navbarItems.classList.toggle('hidden')
})

// sidebar va navbar menularga "active" klasini qo'shish va o'chirish, filterlash funksiyasi:
let filterName;
function filter(){
        filterImg.forEach((image) => {
           let filterImages = image.getAttribute('data-name')
           if((filterImages == filterName) || filterName == 'ALL'){
            image.classList.add('show')
            image.classList.remove('hide')
           } else {
            image.classList.add('hide')
            image.classList.remove('show')
           }
        })
}


function activeMenu(selectedItem) {
    if(selectedItem.target.classList.contains('category-item')){
        filterItems.querySelector('.active').classList.remove('active')
        selectedItem.target.classList.add('active')
        filterName = selectedItem.target.getAttribute('data-name')
        filter();
    }
}

function activeSidebarMenu(selectedItem){
    if(selectedItem.target.classList.contains('category-item')){
        filterItem2.querySelector('.active').classList.remove('active')
        selectedItem.target.classList.add('active')
        filterName = selectedItem.target.getAttribute('data-name')
        filter();
    }
    
}

// Sidebar va Navbar menusi:
window.onload = () => {
    filterItem2.addEventListener('click', activeSidebarMenu)
    filterItems.addEventListener('click', activeMenu)

    for( let index = 0; index < filterImg.length; index++){
        filterImg[index].setAttribute('onclick', 'preview(this)')
    }
}

// Preview Images:

const previewBox = document.querySelector('.preview-box')
    previewImg = previewBox.querySelector('.image-box img')
    closeIcon = previewBox.querySelector('.details .icon')
    shadowBack = document.querySelector('.back')
    categoryName = previewBox.querySelector('.title #name')

function addStyle(){
    previewBox.classList.add('show')
    shadowBack.classList.add('shadow')
}

function removeStyle(){
    previewBox.classList.remove('show')
    shadowBack.classList.remove('shadow')
}

function preview(element) {
    let selectedPrevImg = element.querySelector('img').src
    let selectedImgCategory = element.getAttribute('data-name')
    categoryName.textContent = selectedImgCategory 
    previewImg.src = selectedPrevImg
    addStyle();
    document.querySelector('body').style.overflow = 'hidden'
    closeIcon.addEventListener ("click",() => {
        removeStyle()
    });
}