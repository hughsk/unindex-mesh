module.exports = unindex

function unindex(positions, cells, out) {
  if (positions.positions && positions.cells) {
    out = cells
    cells = positions.cells
    positions = positions.positions
  }

  var dims = positions.length ? positions[0].length : 0
  var points = cells.length ? cells[0].length : 0

  out = out || new Float32Array(cells.length * points * dims)

  if (points === 3 && dims === 2) {
    for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
      var cell = cells[i]
      out[n++] = positions[cell[0]][0]
      out[n++] = positions[cell[0]][1]
      out[n++] = positions[cell[1]][0]
      out[n++] = positions[cell[1]][1]
      out[n++] = positions[cell[2]][0]
      out[n++] = positions[cell[2]][1]
    }
  } else
  if (points === 3 && dims === 3) {
    for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
      var cell = cells[i]
      out[n++] = positions[cell[0]][0]
      out[n++] = positions[cell[0]][1]
      out[n++] = positions[cell[0]][2]
      out[n++] = positions[cell[1]][0]
      out[n++] = positions[cell[1]][1]
      out[n++] = positions[cell[1]][2]
      out[n++] = positions[cell[2]][0]
      out[n++] = positions[cell[2]][1]
      out[n++] = positions[cell[2]][2]
    }
  } else {
    for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
      var cell = cells[i]
      for (var c = 0; c < cell.length; c++) {
        var C = cell[c]
        for (var k = 0; k < dims; k++) {
          out[n++] = positions[C][k]
        }
      }
    }
  }

  return out
}
