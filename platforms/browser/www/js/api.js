// PROD
base_url = "http://localhost/API-RECLAMOS/api.php"
// DEV
base_url = "http://localhost/API-RECLAMOS/api.php"


async function get_users(id){
    url = base_url
    if(id != undefined){
        url = base_url + "?id=" + id;
    }
    alert("url: " + url)
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}