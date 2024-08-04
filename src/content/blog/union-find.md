---
title: 'Union Find'
date: '2023-12-02'
tags: ['algorithm']
isDraft: false
summary: Union-Find is a data structure that provides efficient operations to determine whether two elements belong to the same subset and to merge (or union) two subsets together.
---
## Introduction
Union-Find, also known as **Disjoint-Set** Data Structure, is a data structure that helps solve the problem of partitioning a set into disjoint subsets. It provides efficient operations to determine whether two elements belong to the same subset and to merge (or union) two subsets together.

It has 2 main operations:
- find(x): Finds and returns the representative (also known as the root) of the subset to which element x belongs
- union(x, y): Merges the subsets containing elements x and y into a single subset.

## Basic version
```python
class UnionFind:
    def __init__(self, n):
        # 1. Initialization
        self.parent = list(range(n))

    def find(self, x):
        # 2. Find
        # the parent of root node is itself
        if self.parent[x] == x:
            return x
        else:
            return self.find(self.parent[x])

    def union(self, x, y):
        # 3. Union
        parent_x = self.find(x)
        parent_y = self.find(y)
        self.parent[parent_x] = parent_y

```
1. Initialization: Every node is not connected and in its own set, so set the parent to itself.
2. Find: recursively find the root of current node. The connected nodes will share the same root.
3. Union: Connect 2 nodes together by connecting their roots.


## Optimization 
The Union-Find data structure employs two key optimization techniques: path compression and union by rank.  
### Path Compression
Path compression helps flatten the tree structure formed by subsets, reducing the time complexity of subsequent Find operations.
```python
def find_with_path_compression(self, x):
    if self.parent[x] != x:
        self.parent[x] = self.find(self.parent[x])
    return self.parent[x]
```
Find the root of current node and update the parent of all nodes in the path to the root. 

### Union by Rank
Union by rank ensures that the smaller subset is always merged into the larger subset, preventing the tree from becoming too imbalanced and maintaining efficient performance.

{/* TODO: union by size */}
{/* TODO: code for union by rank */}

## Algorithm Complexity
{/* TODO: time complexity */}
Space: O(n)

## Related questions
- [LC323](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/): number of sets
- count the number of connected component nodes which include node a
- 2d array
- [LC827](https://leetcode.com/problems/making-a-large-island/description/): 2d array + maintain size

## Reference
- [wikipedia](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
- [OI Wiki](https://oi-wiki.org/ds/dsu/)
