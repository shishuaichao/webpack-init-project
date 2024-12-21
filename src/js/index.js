

import { css } from './utils'

let rootNode = document.getElementById('root')


console.log('rootNode', rootNode)

css(rootNode, 'padding', '20px')
css(rootNode, 'border', '1px solid #ccc')


rootNode.innerHTML = `
    Hello webpack-init
    <h1>Hello webpack-init</h1>
  `