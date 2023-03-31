let dbUsers = [ {
    username: "ali" ,
    password: "password",
    name:"ali",
    email: "ali@utem.com"


},
{
    username: "johnny",
    password: "yespapa",
    name: "johnny johnny",
    email: "eatingsugar@nopapa.com"
}]
   
function login(username,password) {
    console.log("someone try to login with",username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if (matched) {
        if(matched.password == password){
            return matched
        } else {
            return "password not matched"
        } 
    }else {
            return "username not found"
        }
    }



//try login
login("johnny","yespapa")