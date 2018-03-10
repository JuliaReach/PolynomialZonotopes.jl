# PolynomialZonotopes.jl

```@meta
DocTestFilters = [r"[0-9\.]+ seconds \(.*\)"]
```

`PolynomialZonotopes` is a [Julia](http://julialang.org) package that extends
[LazySets.jl](https://github.com/JuliaReach/LazySets.jl)
to the non-convex sets representation given by polynomial zonotopes.
This library defines the `PolynomialZonotope` type and methods to manipulate them;
see the manual sections [Types](@ref) and [Methods](@ref) in this documentation
for further details.

```@contents
Pages = ["index.md"]
```

## Features

- A `PolynomialZonotope` type of arbitrary order.
- Basic set operations (e.g. linear maps, Minkowski sum) for polynomial zonotopes.
- Overapproximation of polynomial zonotopes with usual zonotopes.
- Order reduction of polynomial zonotopes.

## Definition

Polynomial zonotopes were introduced by M. Althoff in *Reachability analysis of nonlinear
systems using conservative polynomialization and non-convex sets*, Hybrid Systems:
Computation and Control, 2013, pp. 173–182. They have been applied as a non-convex
set representation in the reachability problem if nonlinear ODEs.

Mathematically, a polynomial zonotope is the tuple ``(c, E, F, G)`` that
defines the set:

```math
\mathcal{PZ} = \left\{ c + ∑_{j=1}^p β_j f^{([1], j)} + ∑_{j=1}^p ∑_{k=j}^p β_j β_k f^{([2], j, k)} + \\
\qquad + … + ∑_{j=1}^p ∑_{k=j}^p ⋯ ∑_{m=ℓ}^p β_j β_k ⋯ β_m f^{([η], j, k, …, m)} + \\
+ ∑_{i=1}^q γ_i g^{(i)}, \qquad β_i, γ_i ∈ [-1, 1] \right\},
```
where the number of factors in the final product, ``β_j β_k ⋯ β_m``, corresponds to
the polynomial order ``η``, and:

- ``c ∈ \mathbb{R}^n`` is the starting point (in some particular cases it corresponds
  to the center of a usual zonotope),

- ``E = [E^{[1]} ⋯ E^{[η]}]`` is an ``n × p × η(η+1)/2`` matrix with column-blocks

```math
E^{[i]} = [f^{([i], 1, 1, …, 1)} ⋯ f^{([i], p, p, …, p)}], \qquad i = 1,…, η
```
called the matrix of *multi-indexed generators with equal indices*, where each
``f^{([i], k_1, k_2, …, k_i)}`` is an ``n``-vector,

- ``F = [F^{[2]} ⋯ F^{[η]}]`` is a matrix with column-blocks

```math
F^{[i]} = [f^{([i], 1, 1, …, 1, 2)} f^{([i], 1, 1, …, 1, 3)} ⋯ f^{([i], 1, 1, …, 1, p)} \\
f^{([i], 1, 1, …, 2, 2)} f^{([i], 1, 1, …, 2, 3)} ⋯ f^{([i], 1, 1, …, 2, p)} \\
f^{([i], 1, 1, …, 3, 3)} ⋯], \qquad i = 1,…, η
```
called the matrix of *multi-indexed generators with unequal indices* (or, more accurately,
not-all-equal indices), where each ``f^{([i], k_1, k_2, …, k_i)}`` is an ``n``-vector,

- ``G = [G^{[1]} ⋯ G^{[q]}]`` is an ``n × q`` matrix with columns

```math
G^{[i]} = g^{(i)}, \qquad i = 1,…, q
```
called the matrix of *single-indexed generators*, where each ``g^{(i)}`` is an
``n``-vector.

## Library Outline

```@contents
Pages = [
    "lib/types.md",
    "lib/methods.md"
]
Depth = 2
```
