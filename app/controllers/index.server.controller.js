// Invoke 'strict' JavaScript mode
'use strict';

exports.render = function(req,res){
	if(req.session.lastVisit){
		console.log(req.session.lastVisit);
	}
	req.session.lastVisit = new Date();

	res.render('index',{
		title: '80Startups',
		userFullName: req.user ? req.user.fullName : ''
	});
};