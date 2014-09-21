exports.Doctor = function (doctorId, name, lastName, address, linkSite, email, phone,byappointment,especialidad,pueblo,zipcode){
    
    var doc = {};
	doc.id = doctorId;
	doc.name = name;
	doc.lastName = lastName;
	doc.address = address;
	doc.linkSite = linkSite;
	doc.email = email;
	doc.phone = phone;
    doc.byappointment = byappointment;
    doc.especialidad= especialidad;
    doc.pueblo = pueblo;
    doc.zipcode =zipcode;
	
    return doc;
};
