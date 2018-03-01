using Documenter, PolynomialZonotopes

makedocs(
    doctest = true,  # use this flag to skip doctests (saves time!)
    modules = [PolynomialZonotopes],
    format = :html,
    assets = ["assets/juliareach.css"],
    sitename = "PolynomialZonotopes.jl",
    pages = [
        "Home" => "index.md",
        "Library" => Any[
        "Types" => "lib/types.md",
        "Methods" => "lib/methods.md"],
        "About" => "about.md"
    ]
)

deploydocs(
    repo = "github.com/JuliaReach/PolynomialZonotopes.jl.git",
    target = "build",
    osname = "linux",
    julia  = "0.6",
    deps = nothing,
    make = nothing
)
