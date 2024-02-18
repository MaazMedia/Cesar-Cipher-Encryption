function encrypt() {
  var message = document.getElementById("message").value;
  var shift = parseInt(document.getElementById("shift").value);

  var encryptedMessage = "";

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      encryptedMessage += String.fromCharCode(
        ((charCode - 65 + shift) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      encryptedMessage += String.fromCharCode(
        ((charCode - 97 + shift) % 26) + 97
      );
    } else {
      encryptedMessage += message[i];
    }
  }
  document.getElementById("btn").classList.remove("hidden");
  document.getElementById("encrypted").value = encryptedMessage;
}
function myFunction() {
  console.log("clicked");
  // Get the text field
  var copyText = document.getElementById("encrypted");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
