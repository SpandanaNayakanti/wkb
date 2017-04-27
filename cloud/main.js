
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define('All', function(request, status)  
{
  var query=new Parse.Query("MyCollection");
   query.find().then(function (res) 
{
for (var i=0; i< res.length;i++){
var expirydate=res[i].get('PExpirationDate');
 
var inputDate = new Date(expirydate);
var todaysDate = new Date();

if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
{


}
else
{

alert(" not equal")
}
}})};
