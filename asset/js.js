const row = document.querySelector('main>.row')
const div = document.querySelectorAll('main>.row>div')
let i = 0

function toggleVisibility() {

        if(i%2 == 0){
            div[0].style.opacity ='0'
            div[0].style.visibility = 'hidden'
            div[1].style.opacity ='1'
            div[1].style.visibility = 'visible'
            
        }else{
            div[0].style.opacity ='1'
            div[0].style.visibility = 'visible'
            div[1].style.opacity ='0'
            div[1].style.visibility = 'hidden'
        }
        i++

}
row.addEventListener('click',toggleVisibility)
setInterval(toggleVisibility, 5000);