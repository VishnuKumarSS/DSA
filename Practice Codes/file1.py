S = "moosmyf"
lis = list(S)
len_s = len(S)

counts = [0]*len(S)
for i in range(len(S)):
    for j in S:
        if S[i] == j:
            counts[i] += 1

for i in range(len(S)):
    length = len(lis)/2
    k = str(length)
    kk = k.split(".")

    if int(kk[1]) > 0:
        pass
    else:
        length = int(kk[0])

    if counts[0] == length:
        ans = len(S)
        break
    elif counts[0] >= 1:
        lis.pop()
        counts.pop()
    else:
        lis.pop(0)
        counts.pop(0)

if len_s > 1:
    ans = len_s -  len(lis)
else:
    ans = len(lis)
print(ans)