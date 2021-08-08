// Input digits
function insrt(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}
// Equal sign / =
function eql() {
  $(".calc-display").val(eval($(".calc-display").val()));
}
// Clear function
function c() {
  $(".calc-display").val("");
}
// Delete display input
function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}
