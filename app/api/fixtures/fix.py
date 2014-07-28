import json
import requests
from xml.dom import minidom

jsonin = None
jsonout = []
with open("institutions", "r") as f:
  jsonin = json.loads(f.read())

counter = 0
seen_fids = set()
for i in jsonin:
  data = requests.get('http://www.ofxhome.com/api.php?lookup=%s' % i['fields']['fid'])
  try:
    xml = minidom.parseString(data.text)
    name = xml.getElementsByTagName('name')[0].firstChild.nodeValue
    fid = xml.getElementsByTagName('fid')[0].firstChild.nodeValue
    org = xml.getElementsByTagName('org')[0].firstChild.nodeValue
    if fid in seen_fids:
      print 'repeat fid: %s' % name
      continue
    seen_fids.add(fid)
    i['fields']['name'] = name
    i['fields']['fid'] = fid
    i['fields']['organization'] = org
    i['pk'] = counter
    counter += 1
    jsonout.append(i)
    print name
  except:
    pass

with open("out.json", "w") as o:
  o.write(json.dumps(jsonout, indent=2, separators=(',', ': ')))
