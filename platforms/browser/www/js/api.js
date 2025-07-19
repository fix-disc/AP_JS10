// PROD
base_url = "https://gestor-it.com/libroquejas/api.php"
// DEV
//base_url = "http://localhost/API-RECLAMOS/api.php"


async function get_users(id){
    url = base_url
    if(uuid != undefined){
        url = base_url + "?uuid=" + id;
    }
    alert("url: " + url)
    let response = await fetch(url);
    let data = await response.json();
    return data; 
}