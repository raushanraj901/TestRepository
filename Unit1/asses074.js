var stored_userid="abc@gmail.com";
var stored_userpassword=12345;

var input_user_id="abcd@gmail.com";
var input_user_password=123455;

if (stored_userid==input_user_id && stored_userpassword==input_user_password){
  console.log("login successful");
}else if (stored_userid!=input_user_id && stored_userpassword==input_user_password){
  console.log("invalid user id");
}else if (stored_userid==input_user_id && stored_userpassword!=input_user_password){
  console.log("invalid password");
}else if (stored_userid!=input_user_id && stored_userpassword!=input_user_password){
  console.log("Wrong input");
}