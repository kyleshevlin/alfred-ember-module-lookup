'use strict'
const alfy = require('alfy')

const pairs = [
  { key: '$', value: "import $ from 'jquery'" },
  { key: 'A', value: "import { A } from '@ember/array'" },
  { key: 'Application', value: "import Application from '@ember/application'" },
  { key: 'Array', value: "import EmberArray from '@ember/array'" },
  { key: 'ArrayProxy', value: "import ArrayProxy from '@ember/array/proxy'" },
  { key: 'AutoLocation', value: "import AutoLocation from '@ember/routing/auto-location'" },
  { key: 'Checkbox', value: "import Checkbox from '@ember/component/checkbox'" },
  { key: 'Component', value: "import Component from '@ember/component'" },
  {
    key: 'ContainerDebugAdapter',
    value: "import ContainerDebugAdapter from '@ember/debug/container-debug-adapter'"
  },
  { key: 'Controller', value: "import Controller from '@ember/controller'" },
  { key: 'DataAdapter', value: "import DataAdapter from '@ember/debug/data-adapter'" },
  {
    key: 'DefaultResolver',
    value: "import GlobalsResolver from '@ember/application/globals-resolver'"
  },
  { key: 'Enumerable', value: "import Enumerable from '@ember/enumerable'" },
  { key: 'Evented', value: "import Evented from '@ember/object/evented'" },
  { key: 'HashLocation', value: "import HashLocation from '@ember/routing/hash-location'" },
  { key: 'Helper', value: "import Helper from '@ember/component/helper'" },
  { key: 'Helper.helper', value: "import { helper } from '@ember/component/helper'" },
  {
    key: 'HistoryLocation',
    value: "import HistoryLocation from '@ember/routing/history-location'"
  },
  { key: 'LinkComponent', value: "import LinkComponent from '@ember/routing/link-component'" },
  { key: 'Location', value: "import Location from '@ember/routing/location'" },
  { key: 'Map', value: "import EmberMap from '@ember/map'" },
  { key: 'MapWithDefault', value: "import MapWithDefault from '@ember/map/with-default'" },
  { key: 'Mixin', value: "import Mixin from '@ember/object/mixin'" },
  { key: 'MutableArray', value: "import MutableArray from '@ember/array/mutable'" },
  { key: 'NoneLocation', value: "import NoneLocation from '@ember/routing/none-location'" },
  { key: 'Object', value: "import EmberObject from '@ember/object'" },
  { key: 'RSVP', value: "import RSVP from 'rsvp'" },
  { key: 'Resolver', value: "import Resolver from '@ember/application/resolver'" },
  { key: 'Route', value: "import Route from '@ember/routing/route'" },
  { key: 'Router', value: "import Router from '@ember/routing/router'" },
  { key: 'Service', value: "import Service from '@ember/service'" },
  { key: 'String.camelize', value: "import { camelize } from '@ember/string'" },
  { key: 'String.capitalize', value: "import { capitalize } from '@ember/string'" },
  { key: 'String.classify', value: "import { classify } from '@ember/string'" },
  { key: 'String.dasherize', value: "import { dasherize } from '@ember/string'" },
  { key: 'String.decamelize', value: "import { decamelize } from '@ember/string'" },
  { key: 'String.fmt', value: "import { fmt } from '@ember/string'" },
  { key: 'String.htmlSafe', value: "import { htmlSafe } from '@ember/string'" },
  { key: 'String.loc', value: "import { loc } from '@ember/string'" },
  { key: 'String.underscore', value: "import { underscore } from '@ember/string'" },
  { key: 'String.w', value: "import { w } from '@ember/string'" },
  { key: 'TextArea', value: "import TextArea from '@ember/component/text-area'" },
  { key: 'TextField', value: "import TextField from '@ember/component/text-field'" },
  { key: 'addListener', value: "import { addListener } from '@ember/object/events'" },
  { key: 'addObserver', value: "import { addObserver } from '@ember/object/observers'" },
  { key: 'aliasMethod', value: "import { aliasMethod } from '@ember/object'" },
  { key: 'assert', value: "import { assert } from '@ember/debug'" },
  { key: 'assign', value: "import { assign } from '@ember/polyfills'" },
  { key: 'cacheFor', value: "import { cacheFor } from '@ember/object/internals'" },
  { key: 'compare', value: "import { compare } from '@ember/utils'" },
  { key: 'computed', value: "import { computed } from '@ember/object'" },
  { key: 'computed.alias', value: "import { alias } from '@ember/object/computed'" },
  { key: 'computed.and', value: "import { and } from '@ember/object/computed'" },
  { key: 'computed.bool', value: "import { bool } from '@ember/object/computed'" },
  { key: 'computed.collect', value: "import { collect } from '@ember/object/computed'" },
  {
    key: 'computed.deprecatingAlias',
    value: "import { deprecatingAlias } from '@ember/object/computed'"
  },
  { key: 'computed.empty', value: "import { empty } from '@ember/object/computed'" },
  { key: 'computed.equal', value: "import { equal } from '@ember/object/computed'" },
  { key: 'computed.filter', value: "import { filter } from '@ember/object/computed'" },
  { key: 'computed.filterBy', value: "import { filterBy } from '@ember/object/computed'" },
  {
    key: 'computed.filterProperty',
    value: "import { filterProperty } from '@ember/object/computed'"
  },
  { key: 'computed.gt', value: "import { gt } from '@ember/object/computed'" },
  { key: 'computed.gte', value: "import { gte } from '@ember/object/computed'" },
  { key: 'computed.intersect', value: "import { intersect } from '@ember/object/computed'" },
  { key: 'computed.lt', value: "import { lt } from '@ember/object/computed'" },
  { key: 'computed.lte', value: "import { lte } from '@ember/object/computed'" },
  { key: 'computed.map', value: "import { map } from '@ember/object/computed'" },
  { key: 'computed.mapBy', value: "import { mapBy } from '@ember/object/computed'" },
  { key: 'computed.mapProperty', value: "import { mapProperty } from '@ember/object/computed'" },
  { key: 'computed.match', value: "import { match } from '@ember/object/computed'" },
  { key: 'computed.max', value: "import { max } from '@ember/object/computed'" },
  { key: 'computed.min', value: "import { min } from '@ember/object/computed'" },
  { key: 'computed.none', value: "import { none } from '@ember/object/computed'" },
  { key: 'computed.not', value: "import { not } from '@ember/object/computed'" },
  { key: 'computed.notEmpty', value: "import { notEmpty } from '@ember/object/computed'" },
  { key: 'computed.oneWay', value: "import { oneWay } from '@ember/object/computed'" },
  { key: 'computed.or', value: "import { or } from '@ember/object/computed'" },
  { key: 'computed.readOnly', value: "import { readOnly } from '@ember/object/computed'" },
  { key: 'computed.reads', value: "import { reads } from '@ember/object/computed'" },
  { key: 'computed.setDiff', value: "import { setDiff } from '@ember/object/computed'" },
  { key: 'computed.sort', value: "import { sort } from '@ember/object/computed'" },
  { key: 'computed.sum', value: "import { sum } from '@ember/object/computed'" },
  { key: 'computed.union', value: "import { union } from '@ember/object/computed'" },
  { key: 'computed.uniq', value: "import { uniq } from '@ember/object/computed'" },
  { key: 'copy', value: "import { copy } from '@ember/object/internals'" },
  { key: 'create', value: "import { create } from '@ember/polyfills'" },
  { key: 'debug', value: "import { debug } from '@ember/debug'" },
  { key: 'deprecate', value: "import { deprecate } from '@ember/application/deprecations'" },
  {
    key: 'deprecateFunc',
    value: "import { deprecateFunc } from '@ember/application/deprecations'"
  },
  { key: 'get', value: "import { get } from '@ember/object'" },
  { key: 'getOwner', value: "import { getOwner } from '@ember/application'" },
  { key: 'getProperties', value: "import { getProperties } from '@ember/object'" },
  { key: 'guidFor', value: "import { guidFor } from '@ember/object/internals'" },
  { key: 'inject.controller', value: "import { inject } from '@ember/controller'" },
  { key: 'inject.service', value: "import { inject } from '@ember/service'" },
  { key: 'inspect', value: "import { inspect } from '@ember/debug'" },
  { key: 'instrument', value: "import { instrument } from '@ember/instrumentation'" },
  { key: 'isArray', value: "import { isArray } from '@ember/array'" },
  { key: 'isBlank', value: "import { isBlank } from '@ember/utils'" },
  { key: 'isEmpty', value: "import { isEmpty } from '@ember/utils'" },
  { key: 'isEqual', value: "import { isEqual } from '@ember/utils'" },
  { key: 'isNone', value: "import { isNone } from '@ember/utils'" },
  { key: 'isPresent', value: "import { isPresent } from '@ember/utils'" },
  { key: 'keys', value: "import { keys } from '@ember/polyfills'" },
  { key: 'makeArray', value: "import { makeArray } from '@ember/array'" },
  { key: 'observer', value: "import { observer } from '@ember/object'" },
  { key: 'on', value: "import { on } from '@ember/object/evented'" },
  { key: 'onLoad', value: "import { onLoad } from '@ember/application'" },
  { key: 'platform.defineProperty', value: "import { defineProperty } from '@ember/polyfills'" },
  {
    key: 'platform.hasPropertyAccessors',
    value: "import { hasPropertyAccessors } from '@ember/polyfills'"
  },
  { key: 'removeListener', value: "import { removeListener } from '@ember/object/events'" },
  { key: 'removeObserver', value: "import { removeObserver } from '@ember/object/observers'" },
  { key: 'reset', value: "import { reset } from '@ember/instrumentation'" },
  { key: 'run', value: "import { run } from '@ember/runloop'" },
  { key: 'run.begin', value: "import { begin } from '@ember/runloop'" },
  { key: 'run.bind', value: "import { bind } from '@ember/runloop'" },
  { key: 'run.cancel', value: "import { cancel } from '@ember/runloop'" },
  { key: 'run.debounce', value: "import { debounce } from '@ember/runloop'" },
  { key: 'run.end', value: "import { end } from '@ember/runloop'" },
  { key: 'run.join', value: "import { join } from '@ember/runloop'" },
  { key: 'run.later', value: "import { later } from '@ember/runloop'" },
  { key: 'run.next', value: "import { next } from '@ember/runloop'" },
  { key: 'run.once', value: "import { once } from '@ember/runloop'" },
  { key: 'run.schedule', value: "import { schedule } from '@ember/runloop'" },
  { key: 'run.scheduleOnce', value: "import { scheduleOnce } from '@ember/runloop'" },
  { key: 'run.throttle', value: "import { throttle } from '@ember/runloop'" },
  { key: 'runInDebug', value: "import { runInDebug } from '@ember/debug'" },
  { key: 'runLoadHooks', value: "import { runLoadHooks } from '@ember/application'" },
  { key: 'sendEvent', value: "import { sendEvent } from '@ember/object/events'" },
  { key: 'set', value: "import { set } from '@ember/object'" },
  { key: 'setOwner', value: "import { setOwner } from '@ember/application'" },
  { key: 'setProperties', value: "import { setProperties } from '@ember/object'" },
  { key: 'subscribe', value: "import { subscribe } from '@ember/instrumentation'" },
  { key: 'tryInvoke', value: "import { tryInvoke } from '@ember/utils'" },
  { key: 'trySet', value: "import { trySet } from '@ember/object'" },
  { key: 'typeOf', value: "import { typeOf } from '@ember/utils'" },
  { key: 'unsubscribe', value: "import { unsubscribe } from '@ember/instrumentation'" },
  { key: 'warn', value: "import { warn } from '@ember/debug'" }
]

const matches = alfy.inputMatches(pairs, 'key')

alfy.output(
  matches.map(match => ({
    title: match.key,
    subtitle: match.value,
    arg: match.value
  }))
)
