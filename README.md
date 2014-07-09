# unindex-mesh [![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges) #

Takes a list of vertices and faces, giving you back an array of individual
triangles.

In most cases with WebGL, you'll want to stick with indexed geometry - i.e.
providing a list of unique vertices and the faces that consume them, rather
then including a bunch of duplicate vertices to make each face. This way,
you consume less memory and *maybe* get some performance benefits too. That's
why modules like [bunny](http://npmjs.org/package/bunny) are formatted this
way.

One exemption to this case is if you want to for an intentionally flat
polygonal look. If you use indexed geometry you'll have forced interpolation
between your faces, getting rid of hard edges: this is normally a good thing,
but it spoils the low-poly look if that's what you're after.

So for interoperability/convenience this module can take indexes meshes and
output a `Float32Array` of individual triangles ready to send over to the GPU.

## Usage ##

[![unindex-mesh](https://nodei.co/npm/unindex-mesh.png?mini=true)](https://nodei.co/npm/unindex-mesh)

### `require('unindex-mesh')(positions, faces[, out])` ###

`positions` is an array of vertex positions, with each element being a 3
element vector.

`faces` is a list of triangular faces, with each element being a 3 element
vector of integer indexes.

`out` is an optional argument for including your own array to output the
result into. If not passed, a `Float32Array` of the correct length will
be created for you.

``` javascript
var faceNormals = require('mesh-normals')
var unindex = require('unindex-mesh')
var bunny = require('bunny')

var lowpoly = unindex(bunny.positions, bunny.cells)
var lowpolynormals = faceNormals(lowpoly)
```

### `require('unindex-mesh')(mesh[, out])`

Alternatively, you can pass in an object with the properties `positions` and
`cells` in place of the previous `positions` and `faces` arguments respectively.

``` javascript
var faceNormals = require('mesh-normals')
var unindex = require('unindex-mesh')
var lowpoly = unindex(require('bunny'))
var lowpolynormals = faceNormals(lowpoly)
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/unindex-mesh/blob/master/LICENSE.md) for details.
