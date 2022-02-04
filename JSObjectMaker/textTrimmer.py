# {dialogue: ["আমি মিষ্টি", "তুমি দই", "দিব প্রেম", "যাও কই"]},

with open('dialogues.txt') as F:
    lines = F.readlines()


with open('output.txt','w') as P:
    P.write("{" + "dialogue:" + '[')

    i = 0
    length = len(lines)
    for line in lines:
        if (len(line) == 1):
            continue
        elif (line.__contains__('end')):
            newline = line.replace("end",'"]')
            print(newline)
            P.write('"' + newline + '},')
            P.write("{" + "dialogue:" + '[')
        else:
            x = (line.strip(""))
            print(x)
            P.write('"' + line + '",')
