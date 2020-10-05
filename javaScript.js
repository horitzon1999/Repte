var salutacions = 0;

function myFunction() {
salutacions += 1;


document.getElementById("demo").innerHTML = "Hello World "
  + fname.value + " " + lname.value + "  Nº Salutacions: " + salutacions;

  
  if (salutacions >= 20) {
  document.getElementById("imagen").src = 'https://lh3.googleusercontent.com/proxy/bqS5BL4XLIpCSxUyCcqb3fU1QZzacwqbzoW4eRsp_ywL_XRXdxN-oCwmjOLDP9Rc9jsLjigrOM_Dg3QWR0BS3DnsuLaIQWvufYEyAc2-NEAqe8fI2Q';
}
  }