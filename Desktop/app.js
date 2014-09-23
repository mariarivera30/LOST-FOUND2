
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

//var pg = require("pg");

//var conString = "pg://postgres:casa7463@localhost:5432/oficinasMedicas";

//var client = new pg.Client(conString);
//client.connect();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.all('/', function(req, res, next) {
   es.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  next();
 });



app.get('/', routes.index);
app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



 //login
app.post('/signinDoc', routes.signInDoc);
app.get('/logoutDoc', routes.logoutDoc);
app.post('/signinPat', routes.signInPat);
app.post('/doctor/signup1',routes.createDoctorAccount);
app.put('/doctor/edit/:idD',routes.editDoctor);
app.post('/appointment/signup/new/:idP/:idD',routes.createAppointment);
app.put('/appointment/edit/:idP/:idD',routes.editAppointment);
app.post('/patient/signup/new',routes.createPatientAccount);
app.put('/patient/edit/:idP',routes.editPatient);
app.get('/logoutPat', routes.logoutPat);


//getters 
app.get('/doctor/all', routes.getDoctors);//ok
app.get('/doctor/single/:id',routes.getDoctorById);//ok
app.get('/doctor/fromPatient/:idP',routes.getDoctorsFromPatient);//ok
app.get('/patient/single/:idP',routes.getPatientById);//ok
app.get('/patient/fromDoctor/:idD',routes.getPatientFromDoctor);//ok
app.get('/appointment/fromDoctor/:idD', routes.getAppointmentsFromDoc);//ok
app.get('/appointment/fromPatient/:idP',routes.getAppointmentsFromPatient);//ok
app.get('/appointment/single/:idA',routes.getAppointmentById);//ok
app.get('/appointment/byDateAndDoctor/:idD/:date',routes.getAppointmentsByIdAndDate);//OK
app.get('/appointment/pending/:idD',routes.getAppointmentsPendingFromDoctor);//ok
app.get('/appointment/canceled/:idD/:date',routes.getAppointmentsCanceledFromDoctor);//ok

app.get('/hola', routes.hola);

/*function hola(){
	
var options = {
  host: 'localhost',
  port: '3000',
  method: 'GET',
  path: '/hola'
};
console.log("entro "+options);
var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
    // ...and/or process the entire body here.
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
}*/
//hola();















