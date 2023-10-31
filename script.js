const grande = document.querySelector(".grande")
const punto = document.querySelectorAll(".punto")
const imagen = document.querySelectorAll(".img")



punto.forEach( ( cadaPunto, i )=>{
    punto[i].addEventListener("mouseover", ()=>{
        let position = i
        let operation = position * -33.33

        grande.style.transform = `translateX(${operation}%)`

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
});



const tips = document.querySelector('.peque');
const dot = document.querySelectorAll('.dot');


dot.forEach( ( cadaDot, i )=>{
    dot[i].addEventListener("mouseover", ()=>{
        let posicion = i
        let operacion = posicion * -110

    
        tips.style.transform = `translateX(${operacion}%)`

       

        dot.forEach((cadaDot, i)=>{
            dot[i].classList.remove('activo');
        
        })
        dot[i].classList.add('activo')
        
    })
})

const caries = document.querySelector('.carie');
const point = document.querySelectorAll('.point');

point.forEach( ( cadaDot, i )=>{
    point[i].addEventListener("mouseover", ()=>{
        let posicione = i
        let operacione = posicione * -120

    
        caries.style.transform = `translateX(${operacione}%)`

       

        point.forEach((cadaDot, i)=>{
            point[i].classList.remove('activo');
        
        })
        point[i].classList.add('activo')
        
    })
})












