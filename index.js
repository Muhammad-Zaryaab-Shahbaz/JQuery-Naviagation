// This is code is executed as soon as file is loaded in browser, it has not been excapsulated in functions.

// Constant variables
const TOP = 'top', BOTTOM = 'bottom', LEFT = 'left', RIGHT = 'right', CENTER = 'center',navTopClass = "fixed-top", 
navBottomClass = "fixed-bottom", linkRightClass = "ml-auto w-100 justify-content-end", linkLeftClass = "mr-auto w-100 justify-content-start",
linkCenterClass = "mx-auto d-sm-flex d-block flex-sm-nowrap", tabCenterClass="abs", rightSideBarClass = "rightSideBar", 
sideBarTopClass = "sideBarTop" , sideBarBottomClass = "sideBarBottom";

let navElem = $("#mainNav"),
    linksElem = $("#linksNav"),
    position = navElem.attr("position"),
    push = linksElem.attr("push");

console.log("Position:" + position);
console.log("Push:" + push);
// Checking position of Navigation bar in DOM
if (position == TOP) {
    navElem.removeClass(navBottomClass);
    navElem.addClass(navTopClass);
}
else if (position == BOTTOM) {
    navElem.removeClass(navTopClass);
    navElem.addClass(navBottomClass);
}

// Checking push of List in DOM
if(push === LEFT){
    linksElem.removeClass(linkRightClass);
    linksElem.addClass(linkLeftClass);
}
else if(push === RIGHT){
    linksElem.removeClass(linkLeftClass);
    linksElem.addClass(linkRightClass);
}
else if(push === CENTER){
    let div = document.createElement("div"),
    newId = 'pushNavCenter',
    addDiv = 'mainNav',
    btnId = 'toggleBtn',
    ulId = 'navbarSupportedContent';
    div.setAttribute("id", newId);
    div.setAttribute("class", linkCenterClass);
    $("#" + addDiv).append(div);
    $("#" + btnId).appendTo("#" + newId);
    $("#" + ulId).appendTo("#" + newId);
}

// Changing Position
let changePosition = (id, position) => {
    let navElem = $("#" + id);
    if (position == TOP) {
        navElem.removeClass(navBottomClass);
        navElem.addClass(navTopClass);
    }
    else if (position == BOTTOM) {
        navElem.removeClass(navTopClass);
        navElem.addClass(navBottomClass);
    }
    else if (position == CENTER){
        navElem.addClass(tabCenterClass);
    }
}

// Changing Push to center
let navPushCenter = (newId, addDiv, btnId, ulId) => {
    if ($("#" + newId).length === 0) {
        let div = document.createElement("div");
        div.setAttribute("id", newId);
        div.setAttribute("class", linkCenterClass);
        $("#" + addDiv).append(div);
        $("#" + btnId).appendTo("#" + newId);
        $("#" + ulId).appendTo("#" + newId);
    }
}

// Changing Push to left or right
let navPush = (id, remClass, addClass, removeDiv) => {
    if ($("#" + removeDiv).length !== 0) {
        let newId = 'mainNav';
        $("#toggleBtn").appendTo("#" + newId);
        $("#navbarSupportedContent").appendTo("#" + newId);
        $("#" + removeDiv).remove();
    }
    $("#" + id).removeClass(remClass);
    $("#" + id).addClass(addClass);
}
// justify-content-start
let tabPush = (id, remClass, addClass) =>{
    $("#" + id).removeClass(tabCenterClass);
    $("#" + id).removeClass(remClass);
    $("#" + id).addClass(addClass);
}

let sideBarPush = (id, push) => {
    if (push == RIGHT) {
        $("#" + id).addClass(rightSideBarClass);
        $("#" + id).removeClass(navTopClass);
    }
    else{
        $("#" + id).removeClass(rightSideBarClass);
    }
}

let changeSideBarPosition = (id, position) => {
    let navElem = $("#" + id);
    if (position == TOP) {
        navElem.removeClass(sideBarBottomClass);
        navElem.addClass(sideBarTopClass);
    }
    else if (position == BOTTOM) {
        navElem.removeClass(sideBarTopClass);
        navElem.addClass(sideBarBottomClass);
    }
}