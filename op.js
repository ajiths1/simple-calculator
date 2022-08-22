
    
    function dis(a) {
        document.getElementById("inner").value+=a


        
    }
    function clrscn(){
        document.getElementById("inner").value=""

    }
    function equaltoo(b){
       text=document.getElementById("inner").value
       res=eval(text)
       document.getElementById("inner").value=res
    }
    function squar(c){
        C=document.getElementById("inner").value
        res=Math.sqrt(C)
        document.getElementById("inner").value=res
    }
    function po(d){
        d=document.getElementById("inner").value
        res=d**3
        document.getElementById("inner").value=res


    }