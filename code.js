let openPopupButton = document.querySelector('#open_button_id')
let popupOverlay = document.querySelector('#overlay_id')
let closePopupButton = document.querySelector('#close_button_id')

openPopupButton.onclick = function() {
    popupOverlay.style.display = 'block'
}

closePopupButton.onclick = function() {
    popupOverlay.style.display = 'none'
}
