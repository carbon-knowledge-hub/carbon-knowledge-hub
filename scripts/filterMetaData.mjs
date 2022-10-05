export default function filterMetaData(s) {
  return (
    s.type === "ExportNamedDeclaration" &&
    s.declaration.kind === "const" &&
    s.declaration.declarations[0].type === "VariableDeclarator" &&
    s.declaration.declarations[0].id.name === "metaData"
  )
}
