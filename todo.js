
//Function to handle adding and not displaying data for tasks

function myFunction(){
    const li=document.createElement('li');
    const inputValue=document.getElementById('my-input').value;
    const text=document.createTextNode(inputValue);
    li.appendChild(text);
    
    console.log("hello");
    if(inputValue===" "){
        alert("write something");
    }
    else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('my-input').value="";

    const span=document.createElement('SPAN');
    const cls=document.createTextNode('\u00D7');
    span.className="close";
    span.appendChild(cls);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    var count=document.getElementById('task-count');
    count.innerHTML="Tasks "+document.getElementsByTagName('li').length;


}
submit.addEventListener('click', function(){
    list.parentNode.removeChild(this);
  });
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    console.log("close");
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




