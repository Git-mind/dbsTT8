const currhost = window.location.hostname; 

var newhost=""; 
if(currhost.includes("localhost")){
     newhost = "http://127.0.0.1:5000"
}
else{
    newhost= "https://backxw.hackathonproject.uk"; 
    // newhost= "https://backnodexw.hackathonproject.uk"; 

}

export default newhost; 