var Fhir = require('fhir');

/**
var newValueSets = JSON.parse(fs.readFileSync('..path..to..valuesets.json').toString());
var newTypes = JSON.parse(fs.readFileSync('..path..to..profiles-types.json').toString());
var newResources = JSON.parse(fs.readFileSync('..path..to..profiles-resources.json').toString());
var parser = new ParseConformance(false);           // don't load pre-parsed data
parser.parseBundle(newValueSets);
parser.parseBundle(newTypes);
parser.parseResources(newResources);

**/

var resource = {
  resourceType: 'Patient'
};
var fhir = new Fhir();
var xml = fhir.objToXml(resource);
var json = fhir.xmlToJson(xml);
var obj = fhir.xmlToObj(xml);
var results = fhir.validate(xml, { errorOnUnexpected: true });
results = fhir.validate(obj, {});
