setInterval(r,1);

 function r()
{
  let d= new Date();
  let h=d.getHours();
  let m=d.getMinutes();
  if(m<10)
  {
    m="0"+m;
  }
  let s= d.getSeconds();
  if(s<10)
  {
    s="0"+s;
  }
  let time= h + "   :   " + m + "   :   " + s;
  output.innerHTML=time; // second method which harry used and best method easy and concise, it take id not class
 //  let a=document.getElementById("output"); //this also works
 // a.textContent=time;
}
  



