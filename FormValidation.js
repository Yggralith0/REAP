function validateForm(form)
{
	if(form.name.value=="" || form.name.value==null)
		{
			alert("Name is empty. Please fill in.");
			form.name.focus();
	document.getElementById("nameinput").style.borderColor="red";
			return false;
		}
	
	var re = /^[\w ]+$/;
	
	if(!re.test(form.name.value))
		{
			alert("Error! Invalid characters detected!");
			form.name.focus();
			document.getElementById("nameinput").style.borderColor="red";
			return false;
		}
	
	if(!(species = checkSpecies(form)))
		{
			alert("Please choose your species");
			return false;
		}
	
	if(!(gender = checkGender(form)))
		{
			alert("Are you a male or a female? Please choose and don't complain that there's only two options.");
			return false;
		}
	
	if(form.email.value==""|| form.email.value==null)
		{
			alert("Email is blank. Please fill in.");
			form.email.focus();
			document.getElementById("emailInput").style.borderColor="red";
			return false;
		}
	
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)))
  {  
      alert("You have entered an invalid email. Try Again");
	  form.email.focus();
	  document.getElementById("emailInput").style.borderColor="red";
	  return false;
  }
	
	if(form.answer.value==""|| form.answer.value==null)
		{
			alert("Please answer the question");
			form.answer.focus();
			document.getElementById("answer").style.borderColor="red";
			return false;
		}
	else
		{
			return true;
		}
}

function checkSpecies(field)
{
	for(var k=0; k < field.length; k++)
		{
			if(field[k].checked)
				return field[k].value;
		}
	return false;
}

function checkGender(gChoice)
{
	for(var i=0; i < gChoice.length; i++)
		{
			if(gChoice[i].checked)
				return gChoice[i].value;
		}
	return false;
}