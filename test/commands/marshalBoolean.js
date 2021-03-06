'use strict';

var marshalBoolean = require('../../lib/commands/marshalBoolean');
var should = require('should');
var withData = require('leche').withData;

describe('marshalBoolean', function() {
  it('should return undefined if item is not a Boolean', function() {
    var result = marshalBoolean({});
    (result === undefined).should.equal(true);
  });

  withData({
    'a boolean false item': [false, {BOOL: false}],
    'a boolean true item': [true, {BOOL: true}]
  }, function(item, expected) {
    it('should marshal item to dynamoDb "BOOL" format', function() {
      marshalBoolean(item).should.eql(expected);
    });
  });
});
