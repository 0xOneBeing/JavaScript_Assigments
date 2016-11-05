var num = parseInt(prompt("Enter number of years served (Value MUST be ) : ", ""));

if (num < 10) {
    console.log("You are a level "+num+" staff, and your designation is Casual Staff.");
}
else if (num < 20) {
    console.log("You are a level "+num+" staff, and your designation is Junior Staff.");
}
else if (num < 30) {
    console.log("You are a level "+num+" staff, and your designation is Senior Staff.");
}
else if (num < 40) {
    console.log("You are a level "+num+" staff, and your designation is Manager.");
}
else if (num < 50) {
    console.log("You are a level "+num+" staff, and your designation is Director.");
}
