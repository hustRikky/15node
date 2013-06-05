exports.ctf_export = function(req, res){
	console.log(req.query);
	res.render('document-ctf-export',req.query);
}

exports.ctf_recycle = function(req, res){
	console.log(req.query);
}
