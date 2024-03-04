let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let cons = document.querySelector(".con");
let msgg = document.querySelector("#msg");


let trun0 = true;//plyer0/playerx
let arr = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]
   

const resetgame=()=>{
 trun0=true;
 enable();
};
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (trun0 === true) {
      box.innerText = "O"
      trun0 = false;
    }
    else {
      box.innerText = "X";
      trun0 = true;
    }
    box.disabled = "true";

    checkwinner();
  });
});
 
const disable=()=>{
 for(let b of boxs){
  b.disabled=true;
 }}
 const enable=()=>{
  for(let box of boxs){
   box.disabled=false;
   box.innerText="";
   cons.classList.add("hide");
  }

}

 const show=(win)=>{
  cons.innerText =`Congratulations , Winner is ${win}`;
  cons.classList.remove("hide");
  disable();
 }

const checkwinner = () => {
  for (let i of arr) {

    let position1 = boxs[i[0]].innerText;
    let position2 = boxs[i[1]].innerText;
    let position3 = boxs[i[2]].innerText;
    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
      
       show(position1);


    }
  }
}
};
reset.addEventListener("click",()=>{
  resetgame();

});