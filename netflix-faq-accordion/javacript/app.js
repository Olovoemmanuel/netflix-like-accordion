const accordion = document.querySelectorAll('.accordion')
const icon = document.querySelectorAll('ion-icon')

// adding click event to the accordion
for (let i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click', (e)=>{
        const panel = e.target.nextElementSibling
        if (panel === null){
            return
        }
        if(panel.classList[1] === 'panel-closed'){
            icon[i].classList.toggle('active')
            panel.classList.toggle('panel-open')
        }
        closeAllExcept(panel)
    })  
}

// This function closes the previous panel when new panel is clicked
const closeAllExcept = (pan)=>{
    for(let i=0; i < accordion.length; i++){
        const panelToClose = accordion[i].nextElementSibling
        if(panelToClose !== pan){
            panelToClose.classList.remove('panel-open')
            icon[i].classList.remove('active')
        }
    }
}

// adding click event to the icon 
for (let i=0; i < icon.length; i++){
    icon[i].addEventListener('click', (e)=>{
       const targetIcon = e.target.parentNode.nextElementSibling
       if (targetIcon.classList[1] === 'panel-closed'){
            targetIcon.classList.toggle('panel-open')
            icon[i].classList.toggle('active')
       }
       closeAllExcept(targetIcon)
    })
}
