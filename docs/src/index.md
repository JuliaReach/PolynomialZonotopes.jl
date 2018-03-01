# PolynomialZonotopes.jl

```@meta
DocTestFilters = [r"[0-9\.]+ seconds \(.*\)"]
```

`PolynomialZonotopes` is a [Julia](http://julialang.org) package that extends
`LazySets.jl` to the non-convex sets representation given by polynomial zonotopes.

Polynomial zonotopes were introduced by M. Althoff in *Reachability analysis of nonlinear
systems using conservative polynomialization and non-convex sets*, Hybrid Systems:
Computation and Control, 2013, pp. 173–182. For a mathematical description see
the `PolynomialZonotope`'s type help.

## Features

- A `PolynomialZonotopes` type of arbitrary order.
- Basic set operations for polynomial zonotopes.
- Overapproximation of polynomial zonotopes with usual zonotopes and order reduction.

## Library Outline

```@contents
Pages = [
    "lib/types.md",
    "lib/methods.md"
]
Depth = 2
```
