// Add your code here

function submitData(name, email){
    
    const baseUrl =`http://localhost:3000`;

    return fetch(`${baseUrl}/users`,
        {
        method: "POST",
        headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
        },
        body: JSON.stringify(
            {
                "name" : name,
                "email" : email,
             })
        })
        .then(function(response) {
            return response.json();
        })
        .then(object=>{
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        .catch(error=>{
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });       
}