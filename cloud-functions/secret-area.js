exports.handler = function (event, context, callback) {
    const secretContent = `
    <h3>Welcome to the secret area!</3>
    <p>The secret is that Dublin is the cutest cat in the entire world.</p>
    <img src="secret-img/7896.jpeg" alt="secret image is the cutest cat in the world" />
    `
let body

if(event.body){
 body = JSON.parse(event.body)
} else {
    body ={}
}

if(body.password == "javascript"){
    callback(null, {
        statusCode: 200,
        body: secretContent
    })
} else{
    callback(null, {
        statusCode: 401
    })
}


}