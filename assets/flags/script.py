import json
import os

flags = []

#cwd => current working directory
i = 0
for filename in os.listdir(os.getcwd()):

    if filename[-4:] == ".png":

        flag = {}
        flag['name'] = ' '.join(str.split(filename[:-4], '-'))
        flag['src'] = 'assets/flags/' + filename
        flags.append(flag)

        i += 1


with open('../flags.json', 'w') as output:
    output.write(json.dumps(flags, indent=2))
    output.close()

print "Succesfully stored %d flags in JSON" % i
