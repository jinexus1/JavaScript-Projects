let lists=document.getElementsByClassName("list")
let rightBox=document.getElementById("right")
let leftBox=document.getElementById("left")

for(list of lists){
  list.addEventListener("dragstart",function(e){
    let selected=e.target;
    rightBox.addEventListener("dragover",function(e){
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
     rightBox.appendChild(selected);//adding the selected item to the drop area
     selected=null;//clear the selected element
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected); //adding the selected item to the drop area
      selected = null; //clear the selected element
    });
  })
}