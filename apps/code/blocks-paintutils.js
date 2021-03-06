/**
 * Blockly Lua: ComputerCraft Paintutils API
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for ComputerCraft Paintutils API
 * @author ellen.spertus@gmail.com (Ellen Spertus)
 */
'use strict';

Blockly.ComputerCraft.PAINTUTILS_BLOCK_COLOUR_ = 310;

Blockly.ComputerCraft.PAINTUTILS_FUNCS_ = [
  {funcName: 'loadImage',
   text: 'load image from path %1',
   args: [['PATH', 'String']],
   output: 'Image',
   tooltip:
   'Load an image object from the specified path.'},
  {funcName: 'drawImage',
   text: 'draw image %1 at (%2, %3)',
   args: [['IMAGE', 'Image'],
          ['X', 'Number'],
          ['Y', 'Number']],
   tooltip:
   'Draw an image at the specified (x, y) coordinates.\n' +
   'An image can be obtained with the "load image" block.'},
  {funcName: 'drawPixel',
   text: 'draw %1 pixel at (%2, %3)',
   args: [['COLOUR', 'Colour'],
          ['X', 'Number'],
          ['Y', 'Number']],
   parameterOrder: ['X', 'Y', 'COLOUR'],
   tooltip:
   'Draw a pixel (dot) at the specified (x, y) coordinates\n' +
   'in the specified colour.'},
  {funcName: 'drawLine',
   text: 'draw %1 line from (%2, %3) to (%4, %5)',
   args: [['COLOUR', 'Colour'],
          ['X1', 'Number'],
          ['Y1', 'Number'],
          ['X2', 'Number'],
          ['Y2', 'Number']],
   parameterOrder: ['X1', 'Y1', 'X2', 'Y2', 'COLOUR'],
   tooltip:
   'Draw a line in the specified colour from the first pair\n' +
   'of (x, y) coordinates to the second pair of (x, y) coordinates.'}];

for (var i = 0; i < Blockly.ComputerCraft.PAINTUTILS_FUNCS_.length; i++) {
  Blockly.ComputerCraft.buildValueBlock(
    'paintutils',
    Blockly.ComputerCraft.PAINTUTILS_BLOCK_COLOUR_,
    Blockly.ComputerCraft.PAINTUTILS_FUNCS_[i]);
}
