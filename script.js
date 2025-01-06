//your JS code here. If required.
const body = document. getElementsByTagName("body")[0] ;

const output = document.createElement("div");
output.id = "output";

const heading = document.createElement("h1");
heading.id = "verification_heading";
heading.textContent = "Verify Your Account";

const subheading = document.createElement ("p") ;
subheading.id = "verification_subtext";
subheading.textContent = "We emailed you this six digit code to acciojob@email.com Enter the code below to confirm your email address.";

const otp = document.createElement("div");
otp.id = "otp" ;
otp.classList.add("code-container");

for(let  i = 0; i <6; i++){
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "0";
    input.classList.add("code")
	input.id = `code-${i+1}`
    otp.appendChild(input);
}

// console.log(otp)
console.log(document.getElementsByTagName("input"));

// const code = document.getElementsByTagName("input");
// // code.forEach((item)=>{
    
//     item.onkeypress = (e)=>e.target.nextElementSibling.classList.add("focused");


output.appendChild (heading);
output.appendChild (subheading) ;
output.appendChild(otp);
body.appendChild (output) ;


const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        // Move to the next input when a number is entered
        const value = e.target.value;
        if (value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            // Clear the current input and move to the previous input
            if (!e.target.value && index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});