with open('data/appreciations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ("Ãª", "ê"),   # Ãª -> ê
    ("Ãˆ", "È"),   # Ãˆ -> È
    ("Ã€", "À"),   # Ã€ -> À (€ = cp1252 0x80)
    ("Ã‡", "Ç"),   # Ã‡ -> Ç
    ("Ã‹", "Ù"),   # Ã™ -> Ù
    ("Ã—", "Ô"),   # Ã" -> Ô
]

fixed = content
count = 0
for bad, good in replacements:
    n = fixed.count(bad)
    if n:
        fixed = fixed.replace(bad, good)
        count += n
        print("Fixed %d: U+%04X -> U+%04X" % (n, ord(bad[1]), ord(good)))

with open('data/appreciations.ts', 'w', encoding='utf-8', newline='\n') as f:
    f.write(fixed)

remaining = sum(1 for c in fixed if c == 'Ã')
print("Total fixed: %d" % count)
print("Remaining garbled chars (U+00C3): %d" % remaining)
if remaining:
    for i, c in enumerate(fixed):
        if c == 'Ã' and i+1 < len(fixed):
            print("  pos %d: U+%04X (%s)" % (i, ord(fixed[i+1]), repr(fixed[i:i+4])))
            if i > 5: break
