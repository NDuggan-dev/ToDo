let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let closeBtnDiv = document.querySelector("#menu-btn-div");
let searchBtn = document.querySelector(".bx-search");
let searchDiv = document.querySelector("#search");
let categoriesBtn = document.querySelector(".bx-category");
let categoriesDiv = document.querySelector("#categories");
let addListBtn = document.querySelector(".bx-list-plus");
let addListDiv = document.querySelector("#add-list");
let filterBtn = document.querySelector(".bx-filter");
let filterDiv = document.querySelector("#filter");
let categoriesBtnIcon = document.querySelector("#categories-icon");
let listCategoriesDiv = document.querySelector("#list-categories");

closeBtn.addEventListener("click", ()=>{
  if(closeBtn.classList.contains("bx-menu") || 
  closeBtn.classList.contains("bx-menu-alt-right")){
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  } else{
      menuBtntoArrowChange();
  }
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

categoriesBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  if(!sidebar.classList.contains("open")){
      sidebar.classList.toggle("open"); 
    }
    listCategoriesDiv.classList.toggle("display-none");
    toggleAllButtonsExcept(categoriesDiv)
    menuIconArrowChange(categoriesBtnIcon, "bx-category"); 
  });

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

// following are the code to change sidebar button(optional)
function menuIconArrowChange(buttonIcon, className) {
    if(buttonIcon.classList.contains(`${className}`)){
        buttonIcon.classList.replace(`${className}`, "bx-arrow-back");
    } else {
        buttonIcon.classList.replace("bx-arrow-back", `${className}`);
    }
}

function toggleAllButtonsExcept(buttonDiv){
    buttonDiv.classList.toggle("display-none");
    closeBtnDiv.classList.toggle("display-none");
    searchDiv.classList.toggle("display-none");
    addListDiv.classList.toggle("display-none");
    filterDiv.classList.toggle("display-none");
    categoriesDiv.classList.toggle("display-none");
}



