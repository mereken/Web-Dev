a = int(input())
b = int(input())

result = []
for num in range(a, b + 1):
    if int(num**0.5)**2 == num:
        result.append(str(num))

print(" ".join(result))