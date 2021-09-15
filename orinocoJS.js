
// count the clicked products for the quantity column
//First Bear


    
var i=0;   
function addProd(){
    i++;
    
    };
var istring = JSON.stringify(i);
function storeLocalItem(){
    localStorage.setItem("qtyO1",istring);
};
//storing data : creating an item with the 'i' value
function addAndStore() {
    addProd();  
    storeLocalItem();
};

document.getElementById('addprod1').addEventListener("click",addAndStore);





document.getElementById('panier').addEventListener("click",getQty);
function getQty() {
    if(typeof localStorage!='undefined') { 
        //get the value from the web storage
        var x = localStorage.getItem("qtyO1");
        //check if x does exist
        if(x!=null) {
            //if it does, convert x  str --> int
            x=parseInt(x);
        } else {
            x=1;
    }
    
    document.getElementById("quantity").innerHTML = x;
    } else{
        alert("local storage is not supported");
    }
};




