exports.handler = function (event, context, callback) {
    const secretContent = `
    <h3>Welcome to the secret area!</3>
    <p> Dublin is the cutest cat in the entire world. That is all.</p>
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
        body: "Welcome to the secret area!"
    })
} else{
    callback(null, {
        statusCode: 401,
    })
}


}