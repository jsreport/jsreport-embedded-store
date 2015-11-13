module.exports = function (reporter, definition) {
  if (reporter.options.connectionString.name.toLowerCase() === 'nedb') {
    reporter.documentStore.provider = new (require('./embeddedProvider'))(reporter.documentStore.model, reporter.options);
  }
};