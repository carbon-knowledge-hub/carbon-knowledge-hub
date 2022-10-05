export function createProperty({ key, value }) {
  return {
    type: "Property",
    method: false,
    shorthand: false,
    computed: false,
    kind: "init",
    key: {
      type: "Identifier",
      name: key,
    },
    value,
  }
}

export function createObject(properties) {
  return { type: "ObjectExpression", kind: "init", properties }
}

export function createArray(elements) {
  return { type: "ArrayExpression", kind: "init", elements }
}

export function createLiteral(value) {
  return {
    type: "Literal",
    value,
    raw: `"${value}"`,
  }
}

export function createLiteralProperty({ key, value }) {
  return createProperty({
    key,
    value: createLiteral(value),
  })
}

export function createArrayProperty({ key, value }) {
  return createProperty({
    key,
    value: createArray(value),
  })
}
