
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import banner from "./banner.js";
import product from "./product.js";


export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([product,banner ]),
})
