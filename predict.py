import pandas as pd
import statsmodels.formula.api as sm
import statsmodels.api as xm
import analyze
#height=input('Height')
#weight=input('Weight')

a=[1,2,3]
b=[1,2,3]
estimate=0
for x in range(len(a)):
	estimate=estimate+a[x]*b[x]
print estimate



