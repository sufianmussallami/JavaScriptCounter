let count = 0;

const countValue = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');


btns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    const styles = e.currentTarget.classList;
   
    if(styles.contains('increase')){
      count++;
    }else if(styles.contains('decrease')){
      count--;
    }else{
      count = 0;
    }

    if(count < 0){
      countValue.style.color = 'red';
    }else if(count > 0){
      countValue.style.color = 'green';
    
     
    }else{
      countValue.style.color = 'black'
    }

   countValue.textContent = count;
  })


})