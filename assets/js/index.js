const buttons = document.querySelectorAll('.btn-color')
const img = document.querySelector('.img-phone')

buttons.forEach((color, index) =>{

    color.addEventListener('click', (e) =>{
        e.preventDefault()
        let indX = color.getAttribute('id')
        
        img.classList.add('opaci')
        img.setAttribute(`src`, `assets/img/iphone_${indX}.jpg`)

        setTimeout(() =>{
            img.classList.remove('opaci')
        }, 200)
    })
})