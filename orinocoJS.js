//<script>
//    var namebear = getElementById('name');
 //   documentgetElementById('name').innerHTML='<td id="name"></td>'; // modifier le nom selon l'ours cliqué


//</script>
//<script>
//    var qty = getElementById('quantity');
//    document.getElementById('quantity').innerHTML='<td id="quantity"></td>'; // modifier la quantité selon le nombre d'ours cliqué
//
//
//</script>

// count the clicked products for the quantity column
let plusBtnClicks=0;   //nombre d'ours cliqué par type d'ours initiated to 0
document.getElementsByClassName("fa-plus-square");
document.addEventListener("click", function(e) {
e.preventDefault();
e.stopPropagation();  //stop listening to parents
  
document.getElementById("quantity");  //get the cell quantity of product
document.innerText = (++plusBtnClicks    //add 1 for  a click
    ) + '';
});