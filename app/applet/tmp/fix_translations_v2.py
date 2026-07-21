import re

# Read file
with open('src/lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

hi_start = content.find('hi: {')
print('hi_start index:', hi_start)

idx_consult = content.find('image: "/src/assets/images/about_tailor_workspace_1784565600891.jpg" }', hi_start)
print('idx_consult index:', idx_consult)

if idx_consult != -1:
    end_consult = idx_consult + len('image: "/src/assets/images/about_tailor_workspace_1784565600891.jpg" }')
    idx_classes = content.find('    classes: {', idx_consult)
    print('idx_classes index:', idx_classes)
    
    if idx_classes != -1:
        new_middle = '\n      ]\n    },\n'
        content = content[:end_consult] + new_middle + content[idx_classes:]
        with open('src/lib/translations.ts', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully cleaned up the second corrupted block in the Hindi section!")
    else:
        print("Could not find classes block start!")
else:
    print("Could not find consultation block in Hindi section!")
