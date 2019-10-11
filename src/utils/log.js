/* eslint-disable import/prefer-default-export,no-console */

const defaultFormatOptions = {
  delimiter: '.',
  pre: '[ ',
  post: ' ] --',
  color: '#34A39C',
};

// const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';

const getColorArgs = (color, message) => [message];
// return isNode ? [chalk.hex(color).bold(message)] : [`%c ${message}`, `color: ${color}`];

const decorateArgs = ({
  context, pre, post, delimiter, color, args,
}) => {
  const lastArg = args.pop(); // message will always be the last item
  const namespace = `${pre}${[...context, ...args].join(delimiter)}${post}`;
  const colorArgs = getColorArgs(color, namespace);
  return [...colorArgs, lastArg];
};

// todo: look into https://www.npmjs.com/package/log4js
// todo: add a append context chaining method
export function buildLoggers(initialNameSpace) {
  const context = [initialNameSpace];

  return {
    log: (...args) => {
      console.log.apply(null, decorateArgs({
        ...defaultFormatOptions,
        color: '#34A39C',
        context,
        args,
      }));
    },
    error: (...args) => {
      console.error.apply(null, decorateArgs({
        ...defaultFormatOptions,
        color: '#FFFFFF',
        context,
        args,
      }));
    },
    todo: (...args) => {
      console.log.apply(null, decorateArgs({
        ...defaultFormatOptions,
        color: '#F57A1E',
        pre: 'TODO: [ ',
        context,
        args,
      }));
    },
    warn: (...args) => {
      console.log.apply(null, decorateArgs({
        ...defaultFormatOptions,
        color: '#FFE333',
        warn: 'TODO: [ ',
        context,
        args,
      }));
    },
  };
}
