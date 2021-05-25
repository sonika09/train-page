function PopUp(){
    document.getElementById('alert').style.display="none";

}
function myfun(){
    var a=document.getElementById("from").value
    var b=document.getElementById("date").value
    var c=document.getElementById("to").value
    var d=document.getElementById("classes").value
    var e=document.getElementById("general").value
    var f=document.getElementById("from").checked
    var g=document.getElementById("from").checked
    var h=document.getElementById("from").checked

    if(f==true){
        f=true
    }
    else{
        f=false
    }
    if(g==true){
        g=true
    }
    else{
        g=false
    }
    if(h==true){
        h=true
    }
    else{
        h=false
    }
    console.log("values",f,g,h)
    if(a.length==0||b.length==0||c.length==0||d.length==0||e.length==0){
        alert("something wrong");
    }
    else{
        alert("you got it");
        api();
    }
}
function api(){
        var a=document.getElementById("from").value
        var b=document.getElementById("date").value
        var c=document.getElementById("to").value
        var d=document.getElementById("classes").value
        var e=document.getElementById("general").value
        var f=document.getElementById("from").checked
        var g=document.getElementById("from").checked
        var h=document.getElementById("from").checked
      $.ajax({
          type:"POST",
          url:"http://192.168.1.31.8080/travel-data/",
          datatype:"json",
          contentType:'application/json',
          data:JSON.stringify({
              d_from:a,
              d_to:c,
              date:b,
              section:d,
              seat:e,
              concession:f,
              with_data:g,
              train_available:h
          }),
          success:function(msg){
              if(msg){
                  alert("hello")
              }
              else{
                  alert("code cant run");
              }
          },
          error:function(error){
              console.log(error);
          }
        });

    }
