exports.version = async function(req, res){
    let status = 500;
    let result;

    try{
        result = await dbcontext.version.findAll()
        status = 200;
    }catch (error){
        console.log(error)
    }
    res.status(status).send({version: result[0].versionNumber});
}