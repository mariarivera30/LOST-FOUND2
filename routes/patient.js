exports.Patient=function(patientid, name, lastName,phone){
	var pat ={};
    pat.id = patientid;
	pat.name = name;
	pat.lastName = lastName;
	pat.phone = phone;
	//pat.toJSON = toJSON;
    return pat;
};
