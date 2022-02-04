import time

with open('output.txt') as F:
    lines = F.readlines();

with open('JSobject.txt','w') as J:
    for line in lines:
        for character in line:
            # print(character,end=" ")
            if(character=="" or character=="\n"):
                continue
            J.write(character)

