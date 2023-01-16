module.exports.initialize = async () => {
    const VERSION = [
        {versionNumber: "1.0.0"}
    ]
    try {
        await dbcontext.version.create(VERSION[0]);
    } catch (error) {
        console.log(error)
    }
}