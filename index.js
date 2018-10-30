function getuser(){
  
return new Promise((resolve, reject) => {
    $.ajax({
        method: "get",
        url: 'https://randomuser.me/api/',
        success: (response) => {
            resolve(response)

        }, error: (error) => {
            reject(error);
        }
    })
})

}

function start(){

    Promise.race([getuser(), getuser()]).then(function(response){
        console.log(response)
    })
}

function start2(){

    Promise.all([getuser(), getuser()]).then(function(response){
        console.log(response)
    })
}

