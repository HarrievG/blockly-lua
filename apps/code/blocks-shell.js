/**
 * Blockly Lua: ComputerCraft Shell API
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
 * @fileoverview Blocks for ComputerCraft Shell API
 * @author ellen.spertus@gmail.com (Ellen Spertus)
 */
'use strict';

Blockly.ComputerCraft.SHELL_BLOCK_COLOUR_ = 290;

Blockly.ComputerCraft.SHELL_FUNCS_ = [
  {funcName: 'exit',
   text: 'exit program',
   tooltip:
   'Exit the current program, or the shell if no programs are running.'},
  {blockName: 'dir',
   text: 'get directory',
   output: 'String',
   tooltip: 'Get the path to the current directory.'},
  {funcName: 'setDir',
   text: 'set directory to %1',
   args: [['PATH', 'String']],
   tooltip: 'Set the working directory.'},
  {funcName: 'path',
   text: 'get path',
   output: 'String',
   tooltip: 'Get a colon-separated string of the directories in the path.'},
  {funcName: 'setPath',
   text: 'set path to %1',
   args: [['PATH', 'String']],
   tooltip: 'Set the path to the colon-separated string.'},
  {funcName: 'resolve',
   text: 'resolve %1 %2',
   args: [['CHOICE',
           new Blockly.FieldDropdown(
             [['path', 'resolve'],
              ['program', 'resolveProgram']])],
          ['PATH', 'String']],
   ddFuncName: 'CHOICE',
   tooltip: 'Resolve the given local path or program to an absolute path.'},
  {funcName: 'aliases',
   output: 'Table',
   text: 'get aliases',
   tooltip:
   'Get a table containing the default aliases\n' +
   'and any user-specified aliases.  The key of\n' +
   'each entry is the alias name, and the value\n' +
   'the name of the associated program.'},
  {funcName: 'programs',
   text: 'get %1 files',
   output: 'Table',
   args: [['FILES',
           new Blockly.FieldDropdown(
             [['regular', 'false'],
              ['all', 'true']])]],
   quoteDropdownValues: false,
   tooltip:
   'Get a table of files in the current directory and in rom/programs.\n' +
   'Files whose names start with a period will be shown if "all" is selected.'},
  {funcName: 'getRunningProgram',
   text: 'get running program',
   tooltip: 'Get the path of the currently running shell or program.',
   output: 'String'}];

// TODO: Add shell.run.

for (var i = 0; i < Blockly.ComputerCraft.SHELL_FUNCS_.length; i++) {
  Blockly.ComputerCraft.buildValueBlock(
    'shell',
    Blockly.ComputerCraft.SHELL_BLOCK_COLOUR_,
    Blockly.ComputerCraft.SHELL_FUNCS_[i]);
}

Blockly.ComputerCraft.buildBlockWithDependentInput(
  'shell',
  Blockly.ComputerCraft.SHELL_BLOCK_COLOUR_,
  {blockName: 'change_alias',
   text:'%1 %2 %3',
   args: [['OPTION*',
           [['set alias', 'setAlias*'],
            ['clear alias', 'clearAlias']]],
          ['ALIAS', 'String'],
          ['VALUE^', 'String']],
   depTitle: 'to',
   ddFuncName: 'OPTION'});
