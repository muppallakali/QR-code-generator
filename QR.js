let input=document.getElementById("in")

let img=document.getElementById("image")
function fetching()
{
    if(input.value==""){
        // window.alert("Please Enter Something to generate QR code")
        input.classList.add('error')
        img.style.display="none";
        setTimeout(()=>{
            input.classList.remove('error')
        },1000)
    }
    else{
        img.style.display="block";
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}` 
        input.value=""
    }
    
    
}
