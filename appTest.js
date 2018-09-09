var fx = function(id, did, date, title) {
    this.id = id;
    this.did = did;
    this.date = date; 
    this.title = title;
    this.body = function () {
        return this.date + '--> ' + this.title;
    }
}
var cccc = 'cccc'; 
var jasmineTest = true; 
var a = jasmineTest;  

objs = {a, jasmineTest,cccc, fx };

module.exports = objs;