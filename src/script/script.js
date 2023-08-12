const btn=document.querySelector('.btn')
const content=document.querySelector('.content')



btn.addEventListener('click',()=>{

btn.style.marginLeft=`${content.clientWidth/2 - btn.clientWidth/2}px`

btn.style.marginTop=`${content.clientHeight/2 - btn.clientHeight/2}px`

})