/**
 * Author:    Cyrus Martinez-Weaver
 * Created:   10.29.2022
 * Email: Cycmarti@ucsc.edu
 **/

 var outputEL = document.getElementById("output");

 var new1EL= document.createElement("p");

 new1EL.innerHTML = "PeterPiper";

 var new2EL= document.createElement("P");

 new2EL.innerHTML = "Picked a Patch of Pickled Peppers"

 outputEL.appendChild(new1EL);
 outputEL.appendChild(new2EL);

new1EL.style.color="green";
new1EL.style.fontSize="60px";
new2EL.style.color="green";
new2EL.style.fontSize="60px";
