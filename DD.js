



$("#growBTN").on("click", function(){
    $("#simonHead").animate({height:"+=120px", width:"+=120px"}, "slow");
    var $thing = $("#simonHead");
    console.log($thing);
})

const toggle=document.querySelector('.toggle input')

toggle.addEventListener('click', function(){
    const onOff= toggle.parentNode.querySelector('.onOff')
    onOff.textContent = toggle.checked ? 'GROW ON' : 'GROW OFF'
})

const head= document.querySelector('.simonHead')

toggle.addEventListener('click', function(){
    head.style.height = toggle.checked ? '100px' : '40px'

})

toggle.addEventListener('click', function(){
    head.style.width = toggle.checked ? '100px' : '40px'

})
