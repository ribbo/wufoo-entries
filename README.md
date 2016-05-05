# wufoo-entries

## Installation

    $ npm install wufoo-entries

## Usage

The Wufoo Entries API is broken up into two sections, one for getting entries, and the other for submitting entries.  Documents can be found on [Wufoo.com] (http://help.wufoo.com/articles/en_US/SurveyMonkeyArticleType/The-Entries-API).

### Example

{fishbowl}

This placeholder must be replaced with your subdomain.

{AOI6-LFKL-VM1Q-IEX9}

This placeholder must be replaced with your Wufoo API key.

```javascript
var wufoo = new Wufoo('fishbowl', 'AOI6-LFKL-VM1Q-IEX9');
```

### Entries GET

You’ll use the Entries GET API to grab Entry data from your Wufoo account.

Replace {fhey3v98o8fw7g} with your form identifier.

```javascript
wufoo.getFormEntries('fhey3v98o8fw7g', function(err, entries) {
     // do something with your forms here.
});
```

### Entries POST

You’ll use the Entries POST API to send Entry data to your Wufoo account.

Replace {fhey3v98o8fw7g} with your form identifier and include an object with your form data.

```javascript

var formData = {
    'Field1': 'Lewis Arch'
};

wufoo.postFormEntries('fhey3v98o8fw7g', formData, function(err, entries) {
     // do something with your forms here.
});
```  
