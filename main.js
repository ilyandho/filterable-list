const filterInput = document.getElementById("form");

filterInput.addEventListener("keyup", filterText);

function filterText(e) {
  var filterValue = filterInput.value;
  filterValue = filterValue.toUpperCase();

  // get the uls
  const ul = document.getElementById("names");

  //get lis
  let li = ul.querySelectorAll("li.item");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    a = a.innerHTML.toUpperCase();
    console.log(a);

    if (a.indexOf(filterValue) > -1) {
      //li[i].style.display = "";
      // console.log(());
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
