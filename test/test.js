'use strict';

/**
 * Module dependencies.
 */

const Operator = require('../lib/operator');

const op = new Operator(true);
const insertIF = op.insertIF(
  'tableName',
  [
    {
      row: {
        name: "as''d",
        id: 1
      },
      where: {
        name: 'cxc'
      }
    },
    {
      row: {
        name: 'cxc2',
        id: 2
      },
      where: {
        name: 'cxc2',
        id: 2
      }
    }
  ],
  ['name', 'id', 'age']
);
console.log('insertIF', insertIF);

const insert = op.insert(
  'tableName',
  [
    {
      name: 'cxc',
      id: 1
    },
    {
      name: 'cxc',
      id: 1
    }
  ],
  {
    columns: ['name', 'id', 'age']
  }
);

console.log('insert', insert);

const replace = op.replace(
  'aw_product_asin',
  [
    {
      pdid: '1',
      asin: '1'
    },
    {
      pdid: '2',
      asin: '2'
    }
  ],
  {
    columns: ['pdid', 'asin'],
    ids: ['pdid']
  }
);

console.log('replace', replace);

// const update = op.update('tableName', {
//     name: 'cxc',
//     id: 1
// }, {
//     columns: ['name', 'id', 'age'],
//     where: {
//         name: 1
//     }
// })

// console.log('update', update)

const updateRows = op.updateRows('tableName', [
  {
    row: {
      name: 'fengmk21',
      age: 12,
      id: 1
    },
    where: {
      id: 1
    }
  },
  {
    row: {
      name: 'fengmk21',
      age: 12,
      id: 1
    },
    where: {
      id: 1
    }
  },
  {
    row: {
      name: 'fengmk21',
      age: 12,
      b: 33,
      id: 1
    },
    where: {
      id: 1
    }
  }
]);

console.log('update', updateRows);

const insertOrUpdate = op.insertOrUpdate(
  'tableName',
  {
    name: 'cxc',
    id: 1
  },
  {
    columns: ['name', 'id', 'age'],
    where: {
      name: 1
    }
  }
);

console.log('insertOrUpdate', insertOrUpdate);
