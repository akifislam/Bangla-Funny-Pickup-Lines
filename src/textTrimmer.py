# {dialogue: ["আমি মিষ্টি", "তুমি দই", "দিব প্রেম", "যাও কই"]},

with open('dialogues.txt') as F:
    lines = F.readlines()


with open('output.txt','w') as P:
    P.write("{" + "dialogue:" + '[')

    for line in lines:
            if(line.__contains__('end')):
                break
            if(len(line)==1):
                continue
            x = (line.strip(""))
            print(x)
            P.write('"' + line + '",')
