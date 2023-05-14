// let iPrice=document.querySelector('#price');
let iForm=document.querySelector('#my-form');
let iList=document.querySelector('#users');
const nameArray=[];

iForm.addEventListener('submit',addToCrud);
let del=document.querySelector('#delete');

del.addEventListener('click',deleteToCrud);


function deleteToCrud(){
    

    axios.get("https://crudcrud.com/api/490ac273b7d74719b2e3d4b569064b90/auth")
    

        .then((res)=>{
            console.log(res)
            let id=res.data[res.data.length-1]._id;
            let url="https://crudcrud.com/api/490ac273b7d74719b2e3d4b569064b90/auth"+id;
            axios.delete(url)
            .then(()=>{
                axios.get("https://crudcrud.com/api/490ac273b7d74719b2e3d4b569064b90/auth")
                .then((resp)=>console.log(resp))
                .catch((err)=>console.log(err))
            })
            .catch((err)=>{
                console.log(err)
            })
            
        })
        .catch((err)=>console.log(err))
}


function addToCrud(e){
    e.preventDefault(e);
    //console.log(e.target.name.value);
    let price=e.target.price.value;
    let name=e.target.name.value;
    // document.body.innerHTML=document.body.innerHTML+name+price;
    let obj={"name":name,"price":price}
    

    axios.post("https://crudcrud.com/api/490ac273b7d74719b2e3d4b569064b90/auth",obj)
        .then(()=>{
            axios.get("https://crudcrud.com/api/490ac273b7d74719b2e3d4b569064b90/auth")
            .then((res)=>{
                let price=0;
                res.data.forEach((val)=>{
                    document.body.innerHTML=document.body.innerHTML+val.name+" "+val.price;
                    price+=Number(val.price);
                })
                document.body.innerHTML=document.body.innerHTML+"\n"+"Your Total price is: "+price;
            })
            .catch((err)=>console.log(err))
        })
        .catch((err)=>console.log(err))
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/490ac273b7d74719b2e3d4b569064b90/auth")
            .then((res)=>{
                let price=0;
                res.data.forEach((val)=>{
                    document.body.innerHTML=document.body.innerHTML+val.name+" "+val.price;
                    price+=Number(val.price);
                })
                document.body.innerHTML=document.body.innerHTML+"\n"+"Your Total price is: "+price;
            })
            .catch((err)=>console.log(err))
        })
    

















//testign JSON it works



// let ar=;
// function deleteToCrud(){
    

//     axios.get("https://crudcrud.com/api/785c9cd3094e4e13a1f9dc6a72ece431/auth")
    

//         .then((res)=>{
//             //console.log(res)
//             let id=res.data[res.data.length-1]._id;
//             let url="https://crudcrud.com/api/785c9cd3094e4e13a1f9dc6a72ece431/auth/"+id;
//             axios.delete(url)
//             .then(()=>{
//                 axios.get("https://crudcrud.com/api/785c9cd3094e4e13a1f9dc6a72ece431/auth")
//                 .then((resp)=>console.log(resp))
//                 .catch((err)=>console.log(err))
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
            
//         })
//         .catch((err)=>console.log(err))
// }









// function addToLocalStorage(e){
//     e.preventDefault(e);
//     nameArray.push(iName.value);
//     let nameArraySearealised=JSON.stringify(nameArray);
//     localStorage.setItem('Names', nameArraySearealised);
//     console.log(JSON.parse(localStorage.getItem('Names')));







//     //console.log(iName.value);
//     // let objName={
//     //     Name:iName.value
//     // }
    
//     // let objNameSerelised=JSON.stringify(objName);
    
//     // localStorage.setItem('Name',objNameSerelised);
//     // // console.log(JSON.parse(localStorage.getItem('Name')));
//     // let objNameDeselearised=JSON.parse(localStorage.getItem('Name'));

//     // console.log(objNameDeselearised.Name);
// };
// // localStorage.removeItem('Name');
// //     console.log(localStorage.getItem('Name'));
    