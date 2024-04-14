medocument.getElementById("submit").addEventListener("click", () => {
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;
  if (number === "" || message === "") {
    alert("Please, Enter both the fields properly!");
    document.getElementById("number").value = "";
  } else {
    let link = `http://Wa.me/${number}?text=${message}`;
    window.open(link);
  }
});
