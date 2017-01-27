var k= 0;
var df;
window.onload=function() {
   df=document.forms[0];
df[1].onkeyup=function() {
df[0].value+=df[1].value.charAt(k);
   k++;
for(c=0;c<df[1].value.length;c++) {
   df[1].value=df[1].value.replace(df[1].value.charAt(c),'▼');
   }
  }
 }