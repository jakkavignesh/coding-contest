const populate = async (site, myStr) => { 
    let url = "https://kontests.net/api/v1/" + site; 
     
    let response = await fetch(url); 
    let json = await response.json(); 

    const len = Object.keys(json).length

    const setTitle = document.querySelector("h2"); 
    setTitle.innerHTML =`Upcoming ${site} contests`; 
    document.querySelector(".output").style.display = "block"; 
    if(len === 0) {
        myStr = "Sorry no upcoming contests";
    }
    else {
        const tableHead = document.querySelector('thead');
        myStr += `<tr> 
            <th>Contest Name</th> 
            <th>URL</th> 
            <th>Start time</th> 
            <th>End time</th> 
            <th>Duration</th> 
            <th>Status</th> 
        </tr>`

        for(let i in json) { 
            myStr += ` 
                    <tr> 
                        <td>${json[i].name}</td> 
                        <td><a href="${json[i].url}" target = "_blank">Register</a></td> 
                        <td>${json[i].start_time}</td> 
                        <td>${json[i].end_time}</td> 
                        <td>${(json[i].duration / 60) / 60}hrs</td> 
                        <td>${json[i].status}</td> 
                    </tr> 
                 `  
        } 
    }
    const tableBody = document.querySelector('tbody'); 
    tableBody.innerHTML = myStr; 
} 
 
 
const btn = document.querySelector('.btn'); 
btn.addEventListener("click", (e) => { 
    const site = document.getElementById('site').value; 
    populate(site, ""); 
})