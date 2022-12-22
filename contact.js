function validate() {
    if( document.myForm.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
       document.myForm.EMail.focus() ;
       var emailID = document.myForm.EMail.value;
       atpos = emailID.indexOf("@");
       dotpos = emailID.lastIndexOf(".");
       
       if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct email ID")
          document.myForm.EMail.focus() ;
          return false;
    }
    if(document.myForm.gt.value == ""){
        alert("Please provide your address")
        document.myForm.gt.focus() ;
        return false;
    }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
       document.myForm.Zip.value.length != 10 ) {
       alert( "Please provide a phone number in the format ##########." );
       document.myForm.Zip.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" ) {
       alert( "Please provide your Product!" );
       return false;
    }

    alert("We will contact to you soon")
    return( true );
 }
 