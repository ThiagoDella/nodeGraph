# nodeGraph
A NodeJS lib for working with graphs made in CEFET-RJ

## How the graph is organized after processing the entry file?
It is created an array of objects like:
```
[{
  parentNode: parent,
  childNodes: [child]
}]
```

As you probably noticed, the lines inside the entry data are a "relation" between nodes.

Where the first entry of a line is a "parent" node which is connected to every other entry in the same line.
