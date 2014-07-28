import json
out = ""
with open("initial_data.json", "r") as f:
  counter = 0
  for l in f:
    if '"pk": "null"' in l:
      out += '"pk": %s\n' % counter
      counter += 1
    else:
      out += l
with open("out.json", "w") as o:
  o.write(json.dumps(json.loads(out), indent=2, separators=(',', ': ')))
