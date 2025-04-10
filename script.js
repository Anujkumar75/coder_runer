function run()
{
    var code=document.getElementById("code").value;
   var result=document.getElementById("result")
result.innerHTML=code;
var code_box=document.getElementById("code-box");
code_box.style.display="none";
var show=document.getElementById("show");
show.style.display="block";
var btn=document.getElementById("run_btn");
btn.style.display="none";
var bc=document.getElementById("icon");
bc.style.display="block";
}

function back()
{
    var show=document.getElementById("show");
show.style.display="none";
var code_box=document.getElementById("code-box");
code_box.style.display="block";
var bc=document.getElementById("icon");
bc.style.display="none";
var btn=document.getElementById("run_btn");
btn.style.display="block";

}