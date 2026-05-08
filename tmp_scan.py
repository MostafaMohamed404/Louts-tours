import os, re
root = 'src'
no_width = []
no_loading = []
no_fetch = []
for dirpath, _, filenames in os.walk(root):
    for fn in filenames:
        if fn.endswith('.astro') or fn.endswith('.html'):
            path = os.path.join(dirpath, fn)
            text = open(path, 'r', encoding='utf-8').read()
            for m in re.finditer(r'<img\\b[^>]*>', text, re.S):
                img = text[m.start():m.end()]
                if 'width=' not in img or 'height=' not in img:
                    no_width.append((path, img.strip().replace('\n', ' ')))
                if 'loading=' not in img:
                    no_loading.append((path, img.strip().replace('\n', ' ')))
                if 'loading="eager"' in img and 'fetchpriority=' not in img:
                    no_fetch.append((path, img.strip().replace('\n', ' ')))
print('NO WIDTH/HEIGHT', len(no_width))
for p, img in no_width[:80]:
    print(p, img)
print('\nNO LOADING', len(no_loading))
for p, img in no_loading[:80]:
    print(p, img)
print('\nNO FETCHPRIORITY', len(no_fetch))
for p, img in no_fetch[:80]:
    print(p, img)
