document.querySelector('.partLeft').style.marginLeft =
`${document.querySelector('.partRight').clientWidth}px`

document.querySelector('.comment_Icon__open').addEventListener('click', function(){
    document.querySelector('.comment_Wrapper').style.display = 'block'
})

document.querySelector('.comment_Icon__close').addEventListener('click', function(){
    document.querySelector('.comment_Wrapper').style.display = 'none'
})

document.querySelectorAll('.post_Reaction').forEach(function(post_Reaction, index){
    post_Reaction.addEventListener('click', function(){
        document.querySelectorAll('.post_Reaction__active')[index].style.display = 'inline';
        post_Reaction.style.display = 'none'
    })
})
document.querySelectorAll('.post_Reaction__active').forEach(function(post_Reaction__active, index){
    post_Reaction__active.addEventListener('click', function(){
        document.querySelectorAll('.post_Reaction')[index].style.display = 'inline';
        post_Reaction__active.style.display = 'none'
    })
})
