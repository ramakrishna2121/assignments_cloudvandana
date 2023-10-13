function validateForm() {
    const fields = [
             { name: "FirstName", label: "First Name" },
             { name: "LastName", label: "Last Name" },
             { name: "DOB", label: "Date of Birth" },
             { name: "Country", label: "Country" },
             { name: "Profession", label: "Profession" },
             { name: "Email", label: "Email" },
             { name: "Num", label: "Mobile Number" }
         ];
         // Check if at least one gender checkbox is checked
        
         const genderCheckboxes = document.querySelectorAll('input[name="Gender"]:checked');
                 if (genderCheckboxes.length === 0) {
                     alert("Please select a gender.");
                     return false;
                 }
                 if (genderCheckboxes.length === 2) {
                     alert("Please select only one gender.");
                     return false;
                 }
     
     for (const field of fields) {
         const input = document.getElementById(field.name);
         if (input.value === "") {
             alert(`Please enter ${field.label}.`);
             return false;   
             }
         if (field.name === "FirstName" || field.name === "LastName" || field.name === "Profession" ) {
             const namePattern = /^[A-Za-z\s]+$/; // This pattern allows only alphabetic characters
             if (!namePattern.test(input.value)) {
                 alert(`Please enter a valid ${field.label}.`);
                 return false;
             }
         }
         
         }
         // Validate email format
             const email = document.getElementById("Email");
             const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
             if (!emailPattern.test(email.value)) {
                 alert("Please enter a valid email address.");
                 return false;
             }

         //  Validate phone number format (assuming a 10-digit format)
         const num = document.getElementById("Num");
             if (num.value.length !== 10) {
                 alert("Please enter a valid 10-digit phone number.");
                 return false;
             }
         
         displayPopup();
         resetForm();
         return false;
             
         }

         
function displayPopup() {
     // Get form values
     var firstName = document.getElementById("FirstName").value;
     var lastName = document.getElementById("LastName").value;
     var dob = document.getElementById("DOB").value;
     var country = document.getElementById("Country").value;
     var gender = document.querySelector('input[name="Gender"]:checked').value;
     var profession = document.getElementById("Profession").value;
     var email = document.getElementById("Email").value;
     var num = document.getElementById("Num").value;

     // Create a popup message with the selected values
     var popupMessage = "First Name: " + firstName + "\n" +
         "Last Name: " + lastName + "\n" +
         "Date of Birth: " + dob + "\n" +
         "Country: " + country + "\n" +
         "Gender: " + gender + "\n" +
         "Profession: " + profession + "\n" +
         "Email: " + email + "\n" +
         "Mobile Number: " + num;

     // Display the popup
     alert("Selected Values:\n\n" + popupMessage);
 }
       
function resetForm() {
     document.getElementById("surveyForm").reset();
 }