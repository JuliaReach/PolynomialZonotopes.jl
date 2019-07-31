# PolynomialZonotopes.jl

[![Build Status](https://travis-ci.org/JuliaReach/PolynomialZonotopes.jl.svg?branch=master)](https://travis-ci.org/JuliaReach/PolynomialZonotopes.jl)
[![Docs latest](https://img.shields.io/badge/docs-latest-blue.svg)](http://juliareach.github.io/PolynomialZonotopes.jl/latest/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/JuliaReach/PolynomialZonotopes.jl/blob/master/LICENSE)
[![Code coverage](http://codecov.io/github/JuliaReach/PolynomialZonotopes.jl/coverage.svg?branch=master)](https://codecov.io/github/JuliaReach/PolynomialZonotopes.jl?branch=master)
[![Join the chat at https://gitter.im/JuliaReach/Lobby](https://badges.gitter.im/JuliaReach/Lobby.svg)](https://gitter.im/JuliaReach/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

`PolynomialZonotopes` is a [Julia](http://julialang.org) package that extends
`LazySets.jl` to the non-convex sets representation given by polynomial zonotopes.

It is written in [Julia](http://julialang.org), a modern high-performance language
for scientific computing.

**WARNING:**  *This package has been deprecated and is no longer maintained. The functionality in this package has been moved to [LazySets.jl](https://github.com/JuliaReach/LazySets.jl/).*

## Resources

- [Manual](http://juliareach.github.io/PolynomialZonotopes.jl/latest/)
- [Contributing](http://juliareach.github.io/PolynomialZonotopes.jl/latest/about.html)

## Installing

### Dependencies

This package requires Julia v0.6. Refer to the [official documentation](https://julialang.org/downloads)
on how to install and run Julia in your system.

To install the [LazySets.jl](https://github.com/JuliaReach/LazySets.jl) dependency,
use the following command inside Julia's REPL:

```julia
Pkg.clone("https://github.com/JuliaReach/LazySets.jl")
```

For further information see the
[installation section of LazySets.jl](https://github.com/JuliaReach/LazySets.jl#installing).

### Installation

To install this package, use the following command inside Julia's REPL:
```julia
Pkg.clone("https://github.com/JuliaReach/PolynomialZonotopes.jl")
```

## Updating

To checkout the latest version, do
```julia
Pkg.checkout("PolynomialZonotopes")
````
