a=int(input())
b=int(input())
result =[]
for n in range(a,b+1):
    if n%2==0:
        result.append(str(n))
print (' '.join(result))