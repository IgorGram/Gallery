"use strict";

let thumbs = document.querySelector(`#thumbs`);
thumbs.addEventListener(`click`, _onClick);

function _onClick(event) {
    let target = event.target;
    if(target.nodeName !== "IMG")return;
    alert("aaa");
    event.preventDefault()


}