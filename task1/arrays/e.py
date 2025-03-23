n = int(input())
arr = list(map(int, input().split()))
flag = False
for i in range(n - 1):
    if arr[i] * arr[i + 1] > 0:
        flag = True
        break
print("YES" if flag else "NO")