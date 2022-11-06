import { visit } from "unist-util-visit"
import { isElement } from "hast-util-is-element"

export function rehypeReplaceDictionaryWords(options) {
  return (tree, file) => {
    const isDictionary = file.history[0].includes("/dictionary")
    if (!isDictionary) return

    visit(tree, "element", (node, index, parent) => {
      if (!parent || typeof index !== "number" || !isElement(node, "p")) return

      const firstNode = node.children[0]
      if (firstNode.tagName) return

      const v = firstNode.value.split("\n: ")
      if (v.length === 1) return

      const replacement = {
        type: "element",
        tagName: "dl",
        properties: node.properties,
        children: [
          {
            type: "element",
            tagName: "dt",
            properties: {},
            children: [
              {
                type: "element",
                tagName: "a",
                properties: {
                  id: v[0].split(" ").join("_").toLowerCase(),
                  href: `#${v[0].split(" ").join("_").toLowerCase()}`,
                },
                children: [createTextNode(v[0])],
              },
            ],
          },
          {
            type: "element",
            tagName: "dd",
            properties: {},
            children: [createTextNode(v[1]), ...node.children.slice(1)].filter(
              (d) => d
            ),
          },
        ],
      }

      parent.children[index] = replacement
    })
  }
}

function createTextNode(value) {
  return { type: "text", value }
}

function createDictionaryWordNode(word) {
  const wordSlug = word.split(" ").join("_").toLowerCase()
  return {
    type: "element",
    tagName: "a",
    properties: {
      href: `/dictionary#${wordSlug}`,
      className: "dictionary-word",
    },
    children: [createTextNode(word)],
  }
}

export function rehypeHighlightDictionaryWords(options) {
  const settings = options || {}

  const words = settings.words.map((d) => d.toLowerCase()) || [
    "greenhouse-gas",
    "emission-trading",
  ]
  const wordsRegex = new RegExp(
    words
      .map((d) => `(\\s|\\n)${d}(\\s.|\\.\\s|\\,\\s|\\!\\s|\\?\\s)`)
      .join("|"),
    "gi"
  )

  return (tree, file) => {
    const shouldIgnore =
      !file.history[0].includes("/factsheets/") &&
      !file.history[0].includes("/basics/")

    if (shouldIgnore) return

    visit(tree, "element", (node, index, parent) => {
      if (!parent || typeof index !== "number" || !isElement(node, "p")) return

      const nodes = node.children.map((n) => {
        if (n.type !== "text") return n
        const annotatedText = n.value.replaceAll(wordsRegex, (d) => {
          const first = d[0]
          const middle = d.slice(1, -2)
          const last = d.slice(-2)
          return `${first}[DICT]${middle}[DICT]${last}`
        })
        const v = annotatedText.split("[DICT]")
        if (v.length === 1) return n
        return {
          type: "element",
          tagName: "span",
          properties: {},
          children: v.map((d) => {
            const isWord = words.includes(d.toLowerCase())
            return isWord ? createDictionaryWordNode(d) : createTextNode(d)
          }),
        }
      })

      const replacement = {
        type: "element",
        tagName: "p",
        properties: node.properties,
        children: nodes,
      }

      parent.children[index] = replacement
    })
  }
}
