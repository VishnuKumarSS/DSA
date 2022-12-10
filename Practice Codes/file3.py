A = []
N = int(input())
for i in range(N):
    K = int(input())
    A.append(K)

ans = 0
for i in A:
    if i == 1:
        ans += 1 
print(ans)