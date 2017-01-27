function checkForm(form){	
	if(form.pwd.value==""|| form.pwd.value==null)
		{
			alert("Password is blank. Why you leave blank? Why would you think the password is nothing?");
			form.pwd.focus();
			return false;
		}
	else if(form.pwd.value=="7829942015"){
		return true; 
	}
	else{
		alert("ACCESS DENIED. Try Again.")
		form.pwd.focus();
		return false;
	}
}