function numberToWordsBillion(number) {
    if (number === 0) {
        return "Zero";
    }

    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convertHundreds(num) {
        if (num >= 100) {
            return units[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + convertTens(num % 100) : "");
        } else {
            return convertTens(num);
        }
    }

    function convertTens(num) {
        if (num < 10) {
            return units[num];
        } else if (num >= 11 && num <= 19) {
            return teens[num - 10];
        } else {
            return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + units[num % 10] : "");
        }
    }

    const billion = Math.floor(number / 1000000000);
    const million = Math.floor((number % 1000000000) / 1000000);
    const thousand = Math.floor((number % 1000000) / 1000);
    const remainder = number % 1000;

    let result = "";

    if (billion > 0) {
        result += convertHundreds(billion) + " Billion";
    }

    if (million > 0) {
        result += (result !== "" ? " " : "") + convertHundreds(million) + " Million";
    }

    if (thousand > 0) {
        result += (result !== "" ? " " : "") + convertHundreds(thousand) + " Thousand";
    }

    if (remainder > 0) {
        result += (result !== "" ? " " : "") + convertHundreds(remainder);
    }

    return result;
}


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var number = document.getElementById("rsInput").value;
    const words = numberToWordsBillion(number);

    // Get form data
    var formData = {
        name: document.getElementById("nameInput").value,
        particulars: document.getElementById("particularsInput").value,
        rs: document.getElementById("rsInput").value
    };

    // Insert data into respective <p> tags
    document.getElementById("name").innerText = formData.name;
    document.getElementById("particulars").innerText = formData.particulars;
    document.getElementById("rs").innerText = formData.rs;
    document.getElementById("total").innerText = formData.rs;
    document.getElementById("rsInWords").innerText = `${words} only`;

    document.getElementById("name2").innerText = formData.name;
    document.getElementById("particulars2").innerText = formData.particulars;
    document.getElementById("rs2").innerText = formData.rs;
    document.getElementById("total2").innerText = formData.rs;
    document.getElementById("rsInWords2").innerText = `${words} only`;

    document.getElementById("name3").innerText = formData.name;
    document.getElementById("particulars3").innerText = formData.particulars;
    document.getElementById("rs3").innerText = formData.rs;
    document.getElementById("total3").innerText = formData.rs;
    document.getElementById("rsInWords3").innerText = `${words} only`;

    document.getElementById("form").style.display = "none";
    document.getElementById("section").style.display = "block";

    window.print();
});
