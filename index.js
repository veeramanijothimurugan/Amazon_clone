const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n=0;
function chageSlide(){
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].style.display='none';
    }
    imgs[n].style.display='block';
}
chageSlide();

prev_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(n > 0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    chageSlide();
})

next_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(n < imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    chageSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    });
}