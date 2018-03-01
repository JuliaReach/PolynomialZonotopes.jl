using PolynomialZonotopes, Base.Test

# =====================================
# Testing the polynomial zonotope type
# =====================================
@time @testset "LazySets.PolynomialZonotope" begin include("unit_PolynomialZonotope.jl") end
