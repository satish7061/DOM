const text = document.getElementById("text");
   text.innerText="I am a para with id text"

   const h = document.getElementsByTagName("h1")[1]
   h.innerHTML="I am a heading"

   const box = document.getElementsByClassName("box")[0]
   box.innerHTML="I am a text in class box"

    document.getElementById("head").innerHTML = "Hello World!";



    function change(){
        let flex = document.getElementById("flex")
        if (flex.style.flexDirection=="row"){
            flex.style.flexDirection="column"
        }
        else{
            flex.style.flexDirection="row"
        }
    }

    let x = document.getElementsByTagName("h1")[2]
    x.style.color = "red"
    x.id = "heading"

    function execute(){
        document.getElementById("head2").innerHTML = "Welcome to Elevation academy";
     }
     function getTime(){
  
        var date = new Date();
        var HH = date.getHours();
        var MM = date.getMinutes();
        var newformat = HH >= 12 ? 'PM' : 'AM'; 
        
        HH = HH % 12; 

        HH = HH ? HH : 12; 
        MM = MM < 10 ? '0' + MM : MM;
        
        if (HH < 10)
          HH = "0" + HH
            let SS = String(date.getSeconds()).padStart(2, '0');
        
      
            document.getElementById("HH").innerText = HH;
            document.getElementById("MM").innerText = MM;
            document.getElementById("SS").innerText = SS;
           
            
        
            setTimeout(getTime, 1000);
        
          
        }
        
        getTime();


       
    function sub(){
        var s = document.getElementsByName('year')[0];
        var txt = s.options[s.selectedIndex].text;
        const text1 = document.getElementById("year-text");
        text1.innerText=txt
    }


    let textarea = document.getElementById("area");
    let form = document.getElementsByTagName("form")[0]
    form.addEventListener('submit', (e) => {
       e.preventDefault()
       let name = e.target.username.value
       let email = e.target.email.value
       let num = e.target.phoneNumber.value
       let year = e.target.birthYear.value

       let valid = false
       valid = (num.substr(0, 2) == '91' && num.length == 10)
       let arr = email.split("@")
       let domain = arr[arr.length - 1]
       valid = valid &&  domain == 'prepbytes.com'
       valid = valid && parseInt(year) > 1995
       let msg;
       
       if(valid == true) 
           textarea.value="All are valid"+'\r\n\n'+"Name  =>  "+name+'\r\n'+"Email  =>  "+email+'\r\n'+"Phone Number  =>  "+num+'\r\n'+"Birth Year  =>  "+year
       else
           textarea.value= "Not valid, Pls check the values";

        
        
    })