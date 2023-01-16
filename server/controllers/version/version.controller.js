exports.version = async function(req, res){
    let status = 500;
    let result;

    try{
        result = "1.0.0"
        status = 200;
    }catch (error){
        console.log(error)
    }

    res.status(status).send({result});
}