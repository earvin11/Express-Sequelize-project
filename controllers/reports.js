
const indexReports = async ( req, res ) => {

    res.status(200).json({
        ok: true,
        msg: 'Get - reports'
    });

}


module.exports = {
    indexReports,
}