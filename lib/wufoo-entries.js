var request = require('request');

module.exports = WufooEntries;

// Constructor
function WufooEntries(subdomain, apiKey) {
    this.subdomain = subdomain;
    this.apiKey = apiKey;
}

// Get all the form entries
WufooEntries.prototype.getFormEntries = function(formIdentifier, cb) {
   this.request('GET', formIdentifier, null, cb);
}

// Post form data
WufooEntries.prototype.postFormEntries = function(formIdentifier, form, cb) {
   this.request('POST', formIdentifier, form, cb);
}

// Make API call to Wufoo
WufooEntries.prototype.request = function(method, formIdentifier, form, cb) {

    var options = {
        uri: 'https://'+this.subdomain+'.wufoo.com/api/v3/forms/'+formIdentifier+'/entries.json',
        method: method,
        headers: {
            'Authorization': 'Basic ' + new Buffer(this.apiKey + ':footastic').toString('base64')
        }
    };

    // Add form to options object if it exists
    if (typeof form === 'object') {
        options.form = form;
    }

    // Perform request
    request(options, function(err, res, body) {
        if (err) {
            return cb err;
        }
        return cb JSON.parse(body);
    });

}
