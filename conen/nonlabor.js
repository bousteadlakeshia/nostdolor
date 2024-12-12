var stringFields = _.filter(collect.getFieldData(), function(field) {
  return typeof field === 'string';
});
