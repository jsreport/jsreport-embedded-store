var _ = require('underscore')

module.exports = function (reporter, definition) {
  if (reporter.options.connectionString.name.toLowerCase() === 'nedb') {
    reporter.documentStore.provider = new (require('./embeddedProvider'))(
      reporter.documentStore.model,
      _.extend({}, reporter.options, { logger: reporter.logger })
    )
  }
};
