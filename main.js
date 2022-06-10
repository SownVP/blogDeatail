document.querySelector('.partLeft').style.marginLeft =
`${document.querySelector('.partRight').clientWidth}px`

document.querySelector('.comment_Icon__open').addEventListener('click', function(){
    document.querySelector('.comment_Wrapper').style.display = 'block'
})

document.querySelector('.comment_Icon__close').addEventListener('click', function(){
    document.querySelector('.comment_Wrapper').style.display = 'none'
})
