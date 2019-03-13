$('.images_box>img:nth-child(1)').addClass('current')
$('.images_box>img:nth-child(2)').addClass('enter')
$('.images_box>img:nth-child(3)').addClass('enter')
var n = 1
function x(i){
    let c = i%3
    if(c===0){
        c=3
    }
   return c
}
setInterval(()=>{
    $(`.images_box>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',(e)=>{
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images_box>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n+=1
},3000)