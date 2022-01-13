---
date: 2022-01-12
tags:
- computer science
- julia
- learnings
- advent of code
- linear algebra
title: 📚 7 Things I learnt about Julia during Advent of Code
---

# Introduction

[In a previous post](/blog/aoc-2021-day-1) I was detailing my learnings
from Day 1 of Advent of Code 2021. As expected, I didn\'t have the time
and energy to write a blog post for every single puzzle (and I actually
didn\'t even finish all of them).

Instead, I am combining here the 7 most interesting things I learnt
while [attempting to solve Advent of Code
2021](https://github.com/mewfree/advent-of-meow-2021).

# `vec`

Converts an array or matrix to a vector (a 1-dimension array). Useful
when parsing files with `readdlm` (explained in previous article) as the
result is a matrix and I would often want a simple `Vector`.

``` julia-vterm
julia> vec([1 2 3; 4 5 6])
```

``` julia-vterm
6-element Vector{Int64}:
 1
 4
 2
 5
 3
 6
```

# `transpose`

\"Transposes\" a matrix, essentially meaning swapping the matrix\'s
dimensions.

``` julia-vterm
julia> [1 2 3; 4 5 6; 7 8 9]
```

``` julia-vterm
3×3 Matrix{Int64}:
 1  2  3
 4  5  6
 7  8  9
```

``` julia-vterm
julia> transpose([1 2 3; 4 5 6; 7 8 9])
```

``` julia-vterm
3×3 transpose(::Matrix{Int64}) with eltype Int64:
 1  4  7
 2  5  8
 3  6  9
```

Most useful when combined with `hcat(n...)` to convert an array of array
to a matrix:

``` julia-vterm
julia> n = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

``` julia-vterm
3-element Vector{Vector{Int64}}:
 [1, 2, 3]
 [4, 5, 6]
 [7, 8, 9]
```

``` julia-vterm
julia> nm = hcat(n...)
```

``` julia-vterm
3×3 Matrix{Int64}:
 1  4  7
 2  5  8
 3  6  9
```

``` julia-vterm
julia> transpose(nm)
```

``` julia-vterm
3×3 transpose(::Matrix{Int64}) with eltype Int64:
 1  2  3
 4  5  6
 7  8  9
```

Unless there is a better way to go directly from array of array to
matrix? If so, please [contact me](/about)!

See also
[`permutedims`](https://docs.julialang.org/en/v1/base/arrays/#Base.permutedims).

# Sets

Array-like structure that only holds unique elements! More efficient
than pushing everything to an array and calling
[`unique`](https://docs.julialang.org/en/v1/base/collections/#Base.unique)
after the fact.

Create an empty set:

``` julia-vterm
julia> Set()
```

``` julia-vterm
Set{Any}()
```

Create a Set from an array:

``` julia-vterm
julia> Set([1, 2, 2, 3, 3, 3])
```

``` julia-vterm
Set{Int64} with 3 elements:
  2
  3
  1
```

# `broadcast`

Super powerful function that applies the same function to all elements
of an iterable. Basically the long-form of the dot notation.

``` julia-vterm
julia> broadcast(+, [1, 2, 3], [1, 1, 1])
```

``` julia-vterm
3-element Vector{Int64}:
 2
 3
 4
```

Same as:

``` julia-vterm
julia> [1, 2, 3] .+ [1, 1, 1]
```

``` julia-vterm
3-element Vector{Int64}:
 2
 3
 4
```

# List comprehensions

Similar to list comprehensions in other languages like Python!

``` julia-vterm
julia> [x*2 for x = 1:5]
```

``` julia-vterm
5-element Vector{Int64}:
  2
  4
  6
  8
 10
```

The above is similar to a `map`:

``` julia-vterm
julia> map(x -> x*2, 1:5)
```

``` julia-vterm
5-element Vector{Int64}:
  2
  4
  6
  8
 10
```

But it\'s very easy to use multiple declarations at the same time:

``` julia-vterm
julia> [(i, j) for i = 1:5, j = [true, false]]
```

``` julia-vterm
5×2 Matrix{Tuple{Int64, Bool}}:
 (1, 1)  (1, 0)
 (2, 1)  (2, 0)
 (3, 1)  (3, 0)
 (4, 1)  (4, 0)
 (5, 1)  (5, 0)
```

# Cartesian Indices

Super useful when dealing with coordinates in any dimensions. The range
between two `CartesianIndex` includes every single coordinates between
the two.

``` julia-vterm
julia> CartesianIndex(1, 1):CartesianIndex(3, 3)
```

``` julia-vterm
3×3 CartesianIndices{2, Tuple{UnitRange{Int64}, UnitRange{Int64}}}:
 CartesianIndex(1, 1)  CartesianIndex(1, 2)  CartesianIndex(1, 3)
 CartesianIndex(2, 1)  CartesianIndex(2, 2)  CartesianIndex(2, 3)
 CartesianIndex(3, 1)  CartesianIndex(3, 2)  CartesianIndex(3, 3)
```

You can also get all the coordinates of a plane:

``` julia-vterm
julia> CartesianIndices([1 2; 3 4; 5 6])
```

``` julia-vterm
3×2 CartesianIndices{2, Tuple{Base.OneTo{Int64}, Base.OneTo{Int64}}}:
 CartesianIndex(1, 1)  CartesianIndex(1, 2)
 CartesianIndex(2, 1)  CartesianIndex(2, 2)
 CartesianIndex(3, 1)  CartesianIndex(3, 2)
```

# `circshift`

Rotates the data in an array by `step`:

``` julia-vterm
julia> circshift([1, 2, 3, 4, 5], 1)
```

``` julia-vterm
5-element Vector{Int64}:
 5
 1
 2
 3
 4
```

It can go backwards too:

``` julia-vterm
julia> circshift([1, 2, 3, 4, 5], -1)
```

``` julia-vterm
5-element Vector{Int64}:
 2
 3
 4
 5
 1
```

# Conclusion

Advent of Code is an amazing way to learn a new language! Dealing with
Linear Algebra in Julia is a breeze and I wish to learn even more about
it in the future.

If you have any thoughts about this article do not hesitate to [contact
me](/about).
