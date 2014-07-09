module.exports = unindex

function unindex(positions, cells, out) {
  if (positions.positions && positions.cells) {
    out = cells
    cells = positions.cells
    positions = positions.positions
  }

  out = out || new Float32Array(cells.length * 9)

  for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
    out[n++] = positions[cells[i][0]][0]
    out[n++] = positions[cells[i][0]][1]
    out[n++] = positions[cells[i][0]][2]
    out[n++] = positions[cells[i][1]][0]
    out[n++] = positions[cells[i][1]][1]
    out[n++] = positions[cells[i][1]][2]
    out[n++] = positions[cells[i][2]][0]
    out[n++] = positions[cells[i][2]][1]
    out[n++] = positions[cells[i][2]][2]
  }
  return out
}
