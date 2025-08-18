function error(event){
    event.preventDefault();

    const emailInput=document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const first = document.getElementById("first").value;
    const second =document.getElementById("last").value;
    const third k= document.getElementById("password").value;
    
    if(!emailPattern.test(emailInput.value)){
    document.getElementById("three").style.display='block';
    document.getElementById("threee").style.display='block';
    document.getElementById('email').style.borderColor="red";
    document.getElementById('Cemail').style.paddingBottom="15px";
    }
    else{
        document.getElementById("three").style.display='none';
        document.getElementById('email').style.borderColor="hsl(246, 25%, 77%)";
        document.getElementById("threee").style.display='none';
    document.getElementById('Cemail').style.paddingBottom="unset";
    }



    if(first===''){
        document.getElementById("one").style.display='block';
    document.getElementById("onee").style.display='block';
    document.getElementById('first').style.borderColor="red";
    document.getElementById('Cfirst').style.paddingBottom="15px";
    }
    else{
        document.getElementById("one").style.display='none';
        document.getElementById("onee").style.display='none';
        document.getElementById('first').style.borderColor="hsl(246, 25%, 77%)";
    document.getElementById('Cfirst').style.paddingBottom="unset";
    }



    if(second===''){
        document.getElementById("two").style.display='block';
    document.getElementById("twoe").style.display='block';
    document.getElementById('last').style.borderColor="red";
    document.getElementById('Clast').style.paddingBottom="15px";
    }
    else{
        document.getElementById("two").style.display='none';
        document.getElementById("twoe").style.display='none';
        document.getElementById('last').style.borderColor="hsl(246, 25%, 77%)";
      
    document.getElementById('Clast').style.paddingBottom="unset";
    }


    if(third===''){
        document.getElementById("four").style.display='block';
    document.getElementById("foure").style.display='block';
    document.getElementById('password').style.borderColor="red";
    document.getElementById('Cpassword').style.paddingBottom="15px";
    }
    else{
        document.getElementById("four").style.display='none';
        document.getElementById("foure").style.display='none';
        document.getElementById('password').style.borderColor="hsl(246, 25%, 77%)";
    document.getElementById('Cpassword').style.paddingBottom="unset";
    }


    
}
