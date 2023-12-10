function SayHello() {
  console.log("rebecca hello");
}
SayHello();

const SayHello = function () {
  console.log("rebecca hello differently ");
};
SayHello();

//---
//ANONYMOUS FUNCTION and IIFE
//--
(function () {
  console.log("Anonymous Function ");
})();


