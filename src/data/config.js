// @flow
import Raven from 'raven-js';

const sentryKey = '45931e7263624bab9eea805839bf9e90';
const sentryApp = '104955';
export const sentryUrl = `https://${sentryKey}@sentry.io/${sentryApp}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context,
  });
  /* eslint no-console:0, no-unused-expressions:0*/
  window && window.console && console.error && console.error(ex);
}
