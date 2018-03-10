var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#PolynomialZonotopes.jl-1",
    "page": "Home",
    "title": "PolynomialZonotopes.jl",
    "category": "section",
    "text": "DocTestFilters = [r\"[0-9\\.]+ seconds \\(.*\\)\"]PolynomialZonotopes is a Julia package that extends LazySets.jl to the non-convex sets representation given by polynomial zonotopes. This library defines the PolynomialZonotope type and methods to manipulate them; see the manual sections Types and Methods in this documentation for further details.Pages = [\"index.md\"]"
},

{
    "location": "index.html#Features-1",
    "page": "Home",
    "title": "Features",
    "category": "section",
    "text": "A PolynomialZonotope type of arbitrary order.\nBasic set operations (e.g. linear maps, Minkowski sum) for polynomial zonotopes.\nOverapproximation of polynomial zonotopes with usual zonotopes.\nOrder reduction of polynomial zonotopes."
},

{
    "location": "index.html#Definition-1",
    "page": "Home",
    "title": "Definition",
    "category": "section",
    "text": "Polynomial zonotopes were introduced by M. Althoff in Reachability analysis of nonlinear systems using conservative polynomialization and non-convex sets, Hybrid Systems: Computation and Control, 2013, pp. 173–182. They have been applied as a non-convex set representation in the reachability problem if nonlinear ODEs.Mathematically, a polynomial zonotope is the tuple (c E F G) that defines the set:mathcalPZ = left c + _j=1^p _j f^(1 j) + _j=1^p _k=j^p _j _k f^(2 j k) + \nqquad +  + _j=1^p _k=j^p  _m=^p _j _k  _m f^( j k  m) + \n+ _i=1^q _i g^(i) qquad _i _i  -1 1 rightwhere the number of factors in the final product, _j _k  _m, corresponds to the polynomial order , and:c  mathbbR^n is the starting point (in some particular cases it corresponds to the center of a usual zonotope),\nE = E^1  E^ is an n  p  (+1)2 matrix with column-blocksE^i = f^(i 1 1  1)  f^(i p p  p) qquad i = 1 called the matrix of multi-indexed generators with equal indices, where each f^(i k_1 k_2  k_i) is an n-vector,F = F^2  F^ is a matrix with column-blocksF^i = f^(i 1 1  1 2) f^(i 1 1  1 3)  f^(i 1 1  1 p) \nf^(i 1 1  2 2) f^(i 1 1  2 3)  f^(i 1 1  2 p) \nf^(i 1 1  3 3)  qquad i = 1 called the matrix of multi-indexed generators with unequal indices (or, more accurately, not-all-equal indices), where each f^(i k_1 k_2  k_i) is an n-vector,G = G^1  G^q is an n  q matrix with columnsG^i = g^(i) qquad i = 1 qcalled the matrix of single-indexed generators, where each g^(i) is an n-vector."
},

{
    "location": "index.html#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2"
},

{
    "location": "lib/types.html#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": ""
},

{
    "location": "lib/types.html#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": "This section describes systems types implemented in PolynomialZonotopes.jl.Pages = [\"types.md\"]\nDepth = 3CurrentModule = PolynomialZonotopes\nDocTestSetup = quote\n    using PolynomialZonotopes\nend"
},

{
    "location": "lib/types.html#PolynomialZonotopes.PolynomialZonotope",
    "page": "Types",
    "title": "PolynomialZonotopes.PolynomialZonotope",
    "category": "type",
    "text": "PolynomialZonotope{N} <: LazySet{N}\n\nType that represents a polynomial zonotope.\n\nFields\n\nc  – starting point\nE  – matrix of multi-indexed generators such that all indices have the same value\nF  – matrix of multi-indexed generators such that not all indices have the same value\nG  – matrix of single-indexed generators\n\nNotes\n\nPolynomial zonotopes were introduced by M. Althoff in Reachability analysis of nonlinear systems using conservative polynomialization and non-convex sets, Hybrid Systems: Computation and Control, 2013, pp. 173–182.\n\nMathematically, it is defined as the tuple (c E F G), where:\n\nc  mathbbR^n is the starting point (in some particular cases it corresponds to the center of a usual zonotope),\nE = E^1  E^ is an n  p  (+1)2 matrix with column-blocks\n\nE^i = f^(i 1 1  1)  f^(i p p  p) qquad i = 1 \n\ncalled the matrix of multi-indexed generators with equal indices, where each f^(i k_1 k_2  k_i) is an n-vector,\n\nF = F^2  F^ is a matrix with column-blocks\n\nF^i = f^(i 1 1  1 2) f^(i 1 1  1 3)  f^(i 1 1  1 p) \nf^(i 1 1  2 2) f^(i 1 1  2 3)  f^(i 1 1  2 p) \nf^(i 1 1  3 3)  qquad i = 1 \n\ncalled the matrix of multi-indexed generators with unequal indices (or, more accurately, not-all-equal indices), where each f^(i k_1 k_2  k_i) is an n-vector,\n\nG = G^1  G^q is an n  q matrix with columns\n\nG^i = g^(i) qquad i = 1 q\n\ncalled the matrix of single-indexed generators, where each g^(i) is an n-vector.\n\nThe polynomial zonotope (c E F G) defines the set:\n\nmathcalPZ = left c + _j=1^p _j f^(1 j) + _j=1^p _k=j^p _j _k f^(2 j k) + \n+  + _j=1^p _k=j^p  _m=^p _j _k  _m f^( j k  m) + \n+ _i=1^q _i g^(i) qquad _i _i  -1 1 right\n\nwhere the number of factors in the final product, _j _k  _m, corresponds to the polynomial order .\n\n\n\n"
},

{
    "location": "lib/types.html#Polynomial-Zonotope-1",
    "page": "Types",
    "title": "Polynomial Zonotope",
    "category": "section",
    "text": "PolynomialZonotope"
},

{
    "location": "lib/methods.html#",
    "page": "Methods",
    "title": "Methods",
    "category": "page",
    "text": ""
},

{
    "location": "lib/methods.html#Methods-1",
    "page": "Methods",
    "title": "Methods",
    "category": "section",
    "text": "This section describes systems methods implemented in PolynomialZonotopes.jl.Pages = [\"methods.md\"]\nDepth = 3CurrentModule = PolynomialZonotopes\nDocTestSetup = quote\n    using PolynomialZonotopes\nend"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.dim-Tuple{PolynomialZonotopes.PolynomialZonotope}",
    "page": "Methods",
    "title": "PolynomialZonotopes.dim",
    "category": "method",
    "text": "dim(pz::PolynomialZonotope)::Int\n\nReturn the ambient dimension of a polynomial zonotope.\n\nInput\n\npz – polynomial zonotope\n\nOutput\n\nAn integer representing the ambient dimension of the polynomial zonotope.\n\n\n\n"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.σ-Tuple{AbstractArray{Float64,1},PolynomialZonotopes.PolynomialZonotope{Float64}}",
    "page": "Methods",
    "title": "PolynomialZonotopes.σ",
    "category": "method",
    "text": "σ(d::AbstractVector{N}, pz::PolynomialZonotope{N})::AbstractVector{N} where {N}\n\nReturn the support vector of a polynomial zonotope along direction d.\n\nInput\n\nd  – direction\npz – polynomial zonotope\n\nOutput\n\nVector representing the support vector.\n\n\n\n"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.polynomial_order-Tuple{PolynomialZonotopes.PolynomialZonotope}",
    "page": "Methods",
    "title": "PolynomialZonotopes.polynomial_order",
    "category": "method",
    "text": "polynomial_order(pz::PolynomialZonotope)::Int\n\nPolynomial order of a polynomial zonotope.\n\nInput\n\npz – polynomial zonotope\n\nOutput\n\nThe polynomial order, defined as the maximal power of the scale factors _i. Usually denoted .\n\n\n\n"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.order-Tuple{PolynomialZonotopes.PolynomialZonotope}",
    "page": "Methods",
    "title": "PolynomialZonotopes.order",
    "category": "method",
    "text": "order(pz::PolynomialZonotope)::Rational{Int}\n\nOrder of a polynomial zonotope.\n\nInput\n\npz – polynomial zonotope\n\nOutput\n\nThe order, defined as the number of generators divided by the ambient dimension.\n\n\n\n"
},

{
    "location": "lib/methods.html#Properties-1",
    "page": "Methods",
    "title": "Properties",
    "category": "section",
    "text": "dim(pz::PolynomialZonotope)\nσ(d::AbstractVector{Float64}, pz::PolynomialZonotope{Float64})\npolynomial_order(pz::PolynomialZonotope)\norder(pz::PolynomialZonotope)"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.linear_map-Tuple{Array{T,2} where T,PolynomialZonotopes.PolynomialZonotope}",
    "page": "Methods",
    "title": "PolynomialZonotopes.linear_map",
    "category": "method",
    "text": "linear_map(M::Matrix, pz::PolynomialZonotope)\n\nReturn the linear map of a polynomial zonotope.\n\nInput\n\nM  – matrix\npz – polynomial zonotope\n\nOutput\n\nPolynomial zonotope such that its starting point and generators are those of pz multiplied by the matrix M.\n\n\n\n"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.scale-Tuple{Number,PolynomialZonotopes.PolynomialZonotope}",
    "page": "Methods",
    "title": "PolynomialZonotopes.scale",
    "category": "method",
    "text": "scale(α::Number, pz::PolynomialZonotope)\n\nReturn a polynomial zonotope modified by a scale factor.\n\nInput\n\nα – polynomial zonotope\npz – polynomial zonotope\n\nOutput\n\nPolynomial zonotope such that its center and generators are multiples of those of pz by a factor .\n\n\n\n"
},

{
    "location": "lib/methods.html#PolynomialZonotopes.minkowski_sum-Tuple{PolynomialZonotopes.PolynomialZonotope,LazySets.Zonotope}",
    "page": "Methods",
    "title": "PolynomialZonotopes.minkowski_sum",
    "category": "method",
    "text": "minkowski_sum(pz::PolynomialZonotope, z::Zonotope)\n\nReturn the Minkowski sum of a polynomial zonotope and a usual zonotope.\n\nInput\n\npz – polynomial zonotope\nz  – usual zonotope\n\nOutput\n\nPolynomial zonotope.\n\n\n\n"
},

{
    "location": "lib/methods.html#Operations-1",
    "page": "Methods",
    "title": "Operations",
    "category": "section",
    "text": "linear_map(M::Matrix, pz::PolynomialZonotope)\nscale(α::Number, pz::PolynomialZonotope)\nminkowski_sum(pz::PolynomialZonotope, z::Zonotope)"
},

{
    "location": "about.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "about.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "This page contains some general information about this project, and recommendations about contributing.Pages = [\"about.md\"]"
},

{
    "location": "about.html#Contributing-1",
    "page": "About",
    "title": "Contributing",
    "category": "section",
    "text": "If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation or propose new features.Below we detail some of the guidelines that should be followed when contributing to this package."
},

{
    "location": "about.html#Branches-1",
    "page": "About",
    "title": "Branches",
    "category": "section",
    "text": "Each pull request (PR) should be pushed in a new branch with the name of the author followed by a descriptive name, e.g. t/mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g. t/mforets/7."
},

{
    "location": "about.html#Unit-testing-and-continuous-integration-(CI)-1",
    "page": "About",
    "title": "Unit testing and continuous integration (CI)",
    "category": "section",
    "text": "This project is synchronized with Travis CI, such that each PR gets tested before merging (and the build is automatically triggered after each new commit).For the maintainability of this project, we try to understand and fix the failing doctests if they exist. We develop in Julia v0.6.0, but for experimentation we also build on the nightly branch.To run the unit tests locally, you should do:$ julia --color=yes test/runtests.jl"
},

{
    "location": "about.html#Contributing-to-the-documentation-1",
    "page": "About",
    "title": "Contributing to the documentation",
    "category": "section",
    "text": "This documentation is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. To build the docs, run make.jl:$ julia --color=yes docs/make.jl"
},

{
    "location": "about.html#Credits-1",
    "page": "About",
    "title": "Credits",
    "category": "section",
    "text": "These persons have contributed to PolynomialZonotopes.jl (in alphabetic order):Marcelo Forets\nNikolaos Kekatos\nChristian Schilling"
},

]}
