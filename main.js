// // 1)
// const button=document.querySelector('.btn');
// const list=document.querySelector('.items');
// button.addEventListener('click', function(e){
//     e.preventDefault();
//     //console.log('click');
    
//     //list.firstElementChild.style.background='green';
//     list.children[0].innerText='Clicked';
//     //document.querySelector
// });


// button.addEventListener('mouseover',function(e){
//     //console.log('mouseovered');
//     list.children[1].innerText='Mouse Overed';
// });
// button.addEventListener('mouseout',function(e){
//     //console.log('mouseout');
//     list.children[2].innerText='Mouse Outed';
// });


// 2)
const form=document.querySelector('#my-form');
const iName=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(iName.value=='' || email.value==''){
        msg.classList.add('error');
        msg.innerHTML='Please Enter Username Password before submitting';
        setTimeout(function(){
            msg.remove();
        },3000);
    }
    else{
        console.log(iName.value);
        console.log(email.value);
    }
    

});




