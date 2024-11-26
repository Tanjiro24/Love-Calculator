function checkloveper() {
  let name = document.getElementById("name").value;
  let partner = document.getElementById("partner-name").value;

  if (name == "") {
    alert("Please enter your name");
  } else if (name.length <= 2) {
    alert("Min lenght is 3");
  } else if (!isNaN(name)) {
    alert("Numbers are not allowed");
  } else if (partner == "") {
    alert("Please enter your love name");
  } else if (partner.length <= 2) {
    alert("Min lenght is 3");
  } else if (!isNaN(partner)) {
    alert("Numbers are not allowed");
  } else {
    let lovdata = Math.random() * 100 + 1;
    lovdata = Math.floor(lovdata);
    document.getElementById("lovevalue").innerHTML =
      "Your love percentage is " + lovdata + "%";
    console.log(lovdata);

    if (lovdata > 70) {
      document.getElementById(
        "lovevalue"
      ).innerHTML = `You are a perfect match with a compatibility score of ${lovdata}%.`;
    }
  }
}

function clear() {
  document.getElementById("name").value = "";
  document.getElementById("partner-name").value = "";
}

window.addEventListener("load", () => {
  clear();
});
