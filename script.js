const passBox=document.getElementById("password");
const len=12;
const Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowwer=Upper.toLowerCase();
const num="0123456789";
const symbol="/-(_)!@$%^&*+#?"
const allChar=Upper+Lowwer+symbol+num;
function generate(){
  var pass="";
  pass+=Upper[Math.floor(Math.random() * Upper.length)];
  pass+=Lowwer[Math.floor(Math.random() * Lowwer.length)];
  pass+=num[Math.floor(Math.random() * num.length)];
  pass+=symbol[Math.floor(Math.random() * symbol.length)];
  while(pass.length<len){
    pass+=allChar[Math.floor(Math.random() * allChar.length)];
  }
  passBox.value=pass;
}
function copyPass(){
  passBox.select();
  document.execCommand("copy");
}
