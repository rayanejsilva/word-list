<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- public
- src
  - components
    - [render-list.js](#clientsrccomponentsrender-listjs)
  - handlers
    - [input-word.js](#clientsrchandlersinput-wordjs)
    - [sort-words.js](#clientsrchandlerssort-wordsjs)
  - init
    - [index.js](#clientsrcinitindexjs)
  - listeners
    - [input-word.js](#clientsrclistenersinput-wordjs)
    - [sort-words.js](#clientsrclistenerssort-wordsjs)
  - logic
    - [is-word.js](#clientsrclogicis-wordjs)
    - [sort-strings.js](#clientsrclogicsort-stringsjs)
- styles
- [data.js](#clientdatajs)

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /public

---

# /src

## /components

<details><summary><a href="../../client/src/components/render-list.js" id="clientsrccomponentsrender-listjs">../client/src/components/render-list.js</a></summary>

</details>

---

## /handlers

<details><summary><a href="../../client/src/handlers/input-word.js" id="clientsrchandlersinput-wordjs">../client/src/handlers/input-word.js</a></summary>

<a name="handleInputWord"></a>

## handleInputWord

Entry point for users adding a word to the list.
It is called each time the user clicks the "add word" button.

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the button. |

</details>

<details><summary><a href="../../client/src/handlers/sort-words.js" id="clientsrchandlerssort-wordsjs">../client/src/handlers/sort-words.js</a></summary>

<a name="sortWords"></a>

## sortWords

Entry point for users sorting the list of words in this app.
It is called each time the input selection changes.

| Param | Type               | Description                                |
| ----- | ------------------ | ------------------------------------------ |
| event | <code>Event</code> | The event triggered by changing the input. |

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

---

## /listeners

<details><summary><a href="../../client/src/listeners/input-word.js" id="clientsrclistenersinput-wordjs">../client/src/listeners/input-word.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/sort-words.js" id="clientsrclistenerssort-wordsjs">../client/src/listeners/sort-words.js</a></summary>

</details>

---

## /logic

<details><summary><a href="../../client/src/logic/is-word.js" id="clientsrclogicis-wordjs">../client/src/logic/is-word.js</a></summary>

</details>

<details><summary><a href="../../client/src/logic/sort-strings.js" id="clientsrclogicsort-stringsjs">../client/src/logic/sort-strings.js</a></summary>

<a name="sortStrings"></a>

## sortStrings ⇒ <code>Array.&lt;string&gt;</code>

Sorts an array of strings according to alphabetical order, length, and insertion order.

Returns a new array without modifying the original array.

**Returns**: <code>Array.&lt;string&gt;</code> - A new array with the same string, but sorted.

| Param            | Type                              | Default                           | Description                      |
| ---------------- | --------------------------------- | --------------------------------- | -------------------------------- |
| [strArray]       | <code>Array.&lt;string&gt;</code> | <code>[]</code>                   | The array of strings to sort.    |
| [dropDownOption] | <code>Array.&lt;string&gt;</code> | <code>[&#x27;oldest&#x27;]</code> | Sort array by the option values. |

</details>

---

---

# /styles

---

<details><summary><a href="../../client/data.js" id="clientdatajs">../client/data.js</a></summary>

<a name="data"></a>

## data

**Properties**

| Name  | Type                              | Description                                                         |
| ----- | --------------------------------- | ------------------------------------------------------------------- |
| words | <code>Array.&lt;string&gt;</code> | An array of words that the user has provided.                       |
| sort  | <code>string</code>               | A string indicating the order string should be displayed in the UI. |

</details>

<!-- END DOCS -->
