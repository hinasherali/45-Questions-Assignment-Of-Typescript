/////////////////////////////////////////////////////////////////////////////////////////
//Large Shirts: Modify the make_shirt() function so that shirts are large 
//by default with a message that reads I love TypeScript. Make a large shirt 
//and a medium shirt with the default message, and a shirt of any size with a 
//different message.
///////////////////////////////////////////////////////////////////////////////
function make_shirt(size, PrintMessage) {
    if (size === void 0) { size = "Large"; }
    if (PrintMessage === void 0) { PrintMessage = " I love TypeScript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(PrintMessage, " print on shirt."));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "<3 <3 Pakistan");
