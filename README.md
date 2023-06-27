# Fork form [JavaScript Snippets (Visual Studio Code)](https://github.com/xianghongai/vscode-javascript-snippet)

> A lot of cuts have been made from the original

<p>
  <h2 align="center">opinionated Code Snippets (Visual Studio Code)</h2>
</p>

<p>
  <h3> ☀️ Opinionated Javascript Sippets for Visual Studio Code, only the most commonly used </h3>
</p>

## Usage

### universal

|    Trigger | Content                                             |
| ---------: | --------------------------------------------------- |
|      `to→` | `typeof operand === 'undefined'`                    |
|     `tcf→` | `try {} catch(err) {} finally {}`                   |
|      `tf→` | `try {} finally {}`                                 |
|     `clg→` | `console.log()`                                     |
|      `tn→` | `throw new Error()`                                 |
|    `iife→` | `const {rename} = fs`                               |
|     `afd→` | `({params}) => {}`                                  |
|      `af→` | `() => `                                            |
|      `cl→` | `class { constructor() {} }`                        |
|      `em→` | `exports.member = value`                            |
|      `me→` | `module.exports = {}`                               |
|      `rq→` | `require()`                                         |
|     `crq→` | `const module = require()`                          |
|     `req→` | `const { name } = require()`                        |
|     `usm→` | `'use strict'`                                      |
|      `co→` | `const name = value`                                |
|     `cdo→` | `const {name} = value`                              |
|     `caf→` | `const name = (params) => {}`                       |
|      `le→` | `let name = value`                                  |
|     `ldo→` | `let { name } = value`                              |
|     `laf→` | `let name = (params) => {}`                         |
|     `imi→` | `import { name } from module`                       |
|     `imd→` | `import moduleName from module`                     |
|    `imas→` | `import { originalName as alias } from module`      |
|   `imall→` | `import * as alias from module`                     |
|     `imn→` | `import module`                                     |
|      `ex→` | `export {name}`                                     |
|    `exas→` | `export name as alias`                              |
|     `exc→` | `export const name = value`                         |
|    `exfn→` | `export function () {}`                             |
|   `exafn→` | `export () => {}`                                   |
|     `exd→` | `export default {}`                                 |
|   `exdas→` | `export { name as default }`                        |
|    `exdc→` | `export default className {}`                       |
|   `exdce→` | `export default className extends baseClassName {}` |
|   `exdaf→` | `export default () => {}`                           |
|   `exdfn→` | `export default function () {}`                     |
|    `exfr→` | `export { default } from otherModule`               |
|  `exallo→` | `export * from otherModule`                         |
|      `pr→` | `const prom = new Promise((resolve, reject) => {})` |
|     `pra→` | `await Promise.all([])`                             |
|     `prj→` | `Promise.reject()`                                  |
|     `prs→` | `Promise.resolve()`                                 |
|     `rpr→` | `return new Promise((resolve, reject) => {})`       |
|    `then→` | `then(res => {})`                                   |
|   `cache→` | `cache(err => {})`                                  |
| `finally→` | `finally(() => {})`                                 |

### vue

|          Trigger | Content                              |
| ---------------: | ------------------------------------ |
|          `vue2→` | `vue2 template`                      |
|      `vue2less→` | `vue2 template with less`            |
|      `vue2scss→` | `vue2 template with scss`            |
|    `vue2stylus→` | `vue2 template with stylus`          |
|          `vue3→` | `vue3 template`                      |
|      `vue3less→` | `vue3 template with less`            |
|      `vue3scss→` | `vue3 template with scss`            |
|    `vue3stylus→` | `vue3 template with stylus`          |
|        `vue3ts→` | `vue3 template with ts`              |
|    `vue3tsless→` | `vue3 template with ts and less`     |
|    `vue3tsscss→` | `vue3 template with ts and scss`     |
|  `vue3tsstylus→` | `vue3 template with ts and stylus`   |
|          `sslt→` | `<script setup lang="ts"></script>`  |
|          `ssls→` | `<style scoped lang="scss"></style>` |
|         `vdata→` | `data() { return {}}`                |
|       `vmethod→` | `method: {}`                         |
|     `vcomputed→` | `computed() {}`                      |
|        `vwatch→` | `watch: {}`                          |
|        `vprops→` | `props: {}`                          |
|   `vcomponents→` | `components: {}`                     |
|      `vcreated→` | `created() {}`                       |
|      `vmounted→` | `mounted() {}`                       |
|  `vbeforemount→` | `beforeMount() {}`                   |
| `vbeforecreate→` | `beforeCreate() {}`                  |
