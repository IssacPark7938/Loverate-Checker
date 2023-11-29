document.querySelector("button").addEventListener("click", function() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Please insert name/names");
        return;
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    name1 = capitalizeFirstLetter(name1);
    name2 = capitalizeFirstLetter(name2);

    var lovePercentage = Math.max(Math.random() * 100, Math.random() * 100);
    lovePercentage = Math.floor(lovePercentage) + 1;

    document.querySelector("h1").innerHTML= "The Loverate between " + name1 + " and " + name2 + " is " + lovePercentage + "%!";
    console.log("The Loverate between " + name1 + " and " + name2 + " is " + lovePercentage + "%!");

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
});