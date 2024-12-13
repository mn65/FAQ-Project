p1 = document.querySelector('.p1')
p2 = document.querySelector('.p2')
p3 = document.querySelector('.p3')
bt1 = document.querySelector('.bt1')
bt2 = document.querySelector('.bt2')
bt3 = document.querySelector('.bt3')
ans1 = document.querySelector('.ans1')
ans2 = document.querySelector('.ans2')
ans3 = document.querySelector('.ans3')

bt1.addEventListener('click', ()=>{
    p1.classList.toggle('resp-answer')
    ans1.classList.toggle('resp-answer-1')
})

bt2.addEventListener('click', ()=>{
    p2.classList.toggle('resp-answer')
    ans2.classList.toggle('resp-answer-1')
    
})

bt3.addEventListener('click', ()=>{
    p3.classList.toggle('resp-answer')
    ans3.classList.toggle('resp-answer-1')
})