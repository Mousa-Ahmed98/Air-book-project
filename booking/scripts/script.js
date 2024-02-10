var ticket = {
    FlightID: -1,
    Travellers: "select one",
    Nickname:"Ms.",
    FirstName: "marian",
    LastName:"rashed",
    Gender:"female",
    Nationality:"Dubai",
    DataOfBirth:"2000-12-16",
    Email:"marian.rashed@gmail.com",
    MobilePhone:"012345678",
    PostCode:"71631",
    FlyerNumber:23,
    SelectMealType:"t",
    SelectWheelchair:"y",
    Discount:"50%",
    checkLabel:true
}
var tickets = [];
var FID = localStorage.getItem("selectedFlightID");
console.log(FID);
var flights = JSON.parse(localStorage.getItem("flights"));
document.getElementById("departureCountry").innerText = flights[FID].from;
document.getElementById("arrivalCountry").innerText = flights[FID].to;

function storeRegistrationForm()
{
    if(localStorage.getItem("tickets") != null)
{
    tickets = JSON.parse(localStorage.getItem("tickets"));
}
    //Select Travellers
    var selectTravellers=document.getElementById("firstselect");
    var value1 = selectTravellers.options[selectTravellers.selectedIndex].value;
    ticket.Travellers = value1;

    //select nickname
    var selectNickname=document.getElementById("secndselect");
    var value2 = selectNickname.options[selectNickname.selectedIndex].value;
    ticket.Nickname = value2;

    //first name
    var selectFirstName=document.getElementById("firstname");
    var getValueFirstName=selectFirstName.value;

    //test first name
    if(isNaN(getValueFirstName)==true)
    {
        ticket.FirstName=getValueFirstName;
        var selectFirstNameCorrect=document.getElementById("FirstNameCorrect");
        var writeMessage11=selectFirstNameCorrect.innerHTML="*first name is correct";
    }
    else
    {
        var selectFirstNameError=document.getElementById("errorFirstName");
        var writeMessage1=selectFirstNameError.innerHTML="*first name is wrong!Please Enter String";
        return;
    }
    


    //last name
    var selectLastName=document.getElementById("lastname");
    var getValueLastName=selectLastName.value;


        //test last name
        if(isNaN(getValueLastName)==true)
        {
            ticket.LastName=getValueLastName;
            var selectLastNameCorrect=document.getElementById("LastNameCorrect");
            var writeMessage12=selectLastNameCorrect.innerHTML="*last name is correct";
        }
        else
        {
            var selectLastNameError=document.getElementById("errorLastName");
            var writeMessage2=selectLastNameError.innerHTML="*last name is wrong!Please Enter String";
            return;
        }

    //select gender
    var selectGender=document.querySelector("input[name='gender']:checked");
    var value3=selectGender.value;
    ticket.Gender=value3;
   

    //select nationality
    var selectNationality=document.getElementById("thirdselect");
    var value4 = selectNationality.options[selectNationality.selectedIndex].value;
    ticket.Nationality=value4;
    

    //select date of birth
    var selectDateOfBirth=document.getElementById("date1");
    var value5 = selectDateOfBirth.value;
    ticket.DataOfBirth=value5;
    
    //select email
    var selectEmail=document.getElementById("email1");
    var value6 = selectEmail.value;

    //test mail
    var emailPattern=/^([a-zA-Z0-9\._-]+)@([a-zA-Z]+)\.[a-zA-Z]{3}$/;
    var result=emailPattern.test(value6);

    if(result==true)
    {
        ticket.Email=value6;
        var selectEmailCorrect=document.getElementById("EmailCorrect");
        var writeMessage13=selectEmailCorrect.innerHTML="*Email is correct";
    }
    else
    {
        var selectEmailError=document.getElementById("errorEmail");
        var writeMessage3=selectEmailError.innerHTML="*Email is wrong!Please Enter valid Email";
        return;
    }
    

    //select mobile phone 
    var selectMobilePhone=document.getElementById("phone");
    var value7 = selectMobilePhone.value;

    //test mobile phone
    if(isFinite(value7)==true)
    {
        ticket.MobilePhone=value7;
        var selectPhoneCorrect=document.getElementById("PhoneCorrect");
        var writeMessage14=selectPhoneCorrect.innerHTML="*phone number is correct";
    }
    else
    {
            var selectPhoneError=document.getElementById("errorPhone");
            var writeMessage4=selectPhoneError.innerHTML="*phone is wrong!Please Enter valid phone";
            return;
    }

    //select post code
    var selectPostCode=document.getElementById("post1");
    var value8 = selectPostCode.value;

    //test post code
    if(isFinite(value8)==true)
    {
        ticket.PostCode=value8;
        var selectPostCodeCorrect=document.getElementById("PostCodeCorrect");
        var writeMessage15=selectPostCodeCorrect.innerHTML="*post code is correct";
    }
    else
    {
        var selectPostError=document.getElementById("errorpostcode");
        var writeMessage5=selectPostError.innerHTML="*post code is wrong!Please Enter valid code";
        return;
    }

    //select flyer number
    var selectFlyerNumber=document.getElementById("flyer1");
    var value9 = selectFlyerNumber.value;

    //test flyer number
    if(isFinite(value9)==true)
    {
        ticket.FlyerNumber=value9;
        var selectFlyerNumCorrect=document.getElementById("FlyerNumCorrect");
        var writeMessage16=selectFlyerNumCorrect.innerHTML="*flyer number is correct";
    }
    else
    {
        var selectFlyerError=document.getElementById("errorflyernum");
        var writeMessage6=selectFlyerError.innerHTML="*flyer number is wrong!Please Enter valid number";
        return;
    }
    

    //Select meal type
    var selectMealType=document.getElementById("firstselect");
    var value10 = selectMealType.options[selectMealType.selectedIndex].value;
    ticket.SelectMealType = value10;


    //Select wheelchair
    var selectWheelChair=document.getElementById("firstselect");
    var value11 = selectWheelChair.options[selectWheelChair.selectedIndex].value;
    ticket.SelectWheelchair = value11;

    //select check label
    var checkLabel=document.getElementById("check1");
    var value12 = checkLabel.value;
    ticket.checkLabel=value12;

     //select discount code
     var selectDiscountCode=document.getElementById("code");
     var value13 = selectDiscountCode.value;

     //test discount code
    if(isFinite(value13)==true)
    {
        ticket.Discount=value13;
        var selectDiscountCorrect=document.getElementById("DiscountCorrect");
        var writeMessage17=selectDiscountCorrect.innerHTML="*discount is correct";
    }
    else
    {
        var selectdiscountError=document.getElementById("errordiscount");
        var writeMessage7=selectdiscountError.innerHTML="*discount is wrong!Please Enter valid number";
        return;
    }
    
    //Set Flight Id
    ticket.FlightID = FID;
     tickets.push(ticket);
     localStorage.setItem("tickets", JSON.stringify(tickets));

}

