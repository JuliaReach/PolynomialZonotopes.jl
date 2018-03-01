# Methods

This section describes systems methods implemented in `PolynomialZonotopes.jl`.

```@contents
Pages = ["methods.md"]
Depth = 3
```

```@meta
CurrentModule = PolynomialZonotopes
DocTestSetup = quote
    using PolynomialZonotopes
end
```

```@docs
dim(pz::PolynomialZonotope)
σ(d::AbstractVector{Float64}, pz::PolynomialZonotope{Float64})
polynomial_order(pz::PolynomialZonotope)
order(pz::PolynomialZonotope)
linear_map(M::Matrix, pz::PolynomialZonotope)
scale(α::Number, pz::PolynomialZonotope)
minkowski_sum(pz::PolynomialZonotope, z::Zonotope)
```
