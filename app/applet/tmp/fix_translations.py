# Read file
with open('src/lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

hi_start = content.find('hi: {')
print('hi_start:', hi_start)

idx_consult = content.find('image: "https://saaisnehstore.com/cdn/shop/articles/Saree_Blouse_Alterations_Auckland.webp?v=1781085803&width=1535" }', hi_start)
print('idx_consult:', idx_consult)

if idx_consult != -1:
    end_consult = idx_consult + len('image: "https://saaisnehstore.com/cdn/shop/articles/Saree_Blouse_Alterations_Auckland.webp?v=1781085803&width=1535" }')
    idx_classes = content.find('    classes: {', idx_consult)
    print('idx_classes:', idx_classes)
    
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
