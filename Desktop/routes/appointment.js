exports.Appointment =function (appID, docID, patID,date, time,arrivalTime, leaveTime,patientConfirm, doctorConfirm, cancel, roomState,turn){
	var app ={};
    app.id = appID;
	app.docID = docID;
	app.appID= patID;
	app.date = date;
	app.time =time;
	app.arrivalTime = arrivalTime;
	app.leaveTime = leaveTime;
	app.appientConfirm = patientConfirm;
    app.doctorConfirm=doctorConfirm;
    app.cancel = cancel;
    app.roomState=roomState;
    app.turn = turn;
	//app.toJSON = toJSON;
    return app;
};
