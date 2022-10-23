export async function callApi(location, min, max ){
    const url = 'https://cash-flow-api.herokuapp.com/get-listings?searchTerm=San+Jose+California&minPrice=' + min + '&maxPrice=' + max
    console.log("URL: ", url)
    const response = await fetch(url, {
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:9999'
        }}).then((res) => res.json());
      console.log(response)
      console.log("body", response.body)
      return response; // parses JSON response into native JavaScript objects
}


