'use strict'
const alfy = require('alfy')
const mapping = require('ember-rfc176-data');

function isDefaultExport(localName) {
  return !!localName;
}

const pairs = mapping.map(({ global, module, export: exportName, localName, deprecated }) => {
  if (isDefaultExport(localName)) {
    return {
      key: localName,
      value: `import ${localName} from '${module}'`
    };
  }

  return {
    key: exportName,
    value: `import { ${exportName} } from '${module}'`
  }
});

const matches = alfy.inputMatches(pairs, 'key')

alfy.output(
  matches.map(match => ({
    title: match.key,
    subtitle: match.value,
    arg: match.value
  }))
)
