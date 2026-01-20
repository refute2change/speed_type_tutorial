import json

with open("public/words/english.txt", "r") as f:
    words = f.readlines()

with open("public/words/english.json", "w") as f:
    json.dump([word.strip() for word in words], f)