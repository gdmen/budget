import json
from collections import deque

output = []

with open('institutions.json', 'r') as f:
  institutions = json.loads(f.read())

output += institutions

categories_def = {
  'income': {
    'salary': {}
    'transfers': {},
  },
  'expenses': {
    'transfers': {},
    'retirement contributions': {},
    'rent': {},
    'bills': {
      'phone': {}
    },
    'food': {
      'groceries': {},
      'fast food': {},
      'restaurants': {}
    },
    'fitness': {
      'bjj': {
        'bjj training': {},
        'bjj tournaments': {}
      },
      'gym': {},
      'supplements': {}
    },
    'medical': {},
    'clothes': {},
    'toiletries': {},
    'household items': {},
    'transportation': {
      'bicycle': {},
      'public transportation': {},
      'taxis': {}
    },
    'travel': {},
    'leisure': {
      'books': {},
      'music': {},
      'movies': {},
      'events': {}
    },
    'charity': {},
    'gifts': {}
  }
}

pk = 0
categories = []
queue = deque([(None, k, v) for k,v in categories_def.items()])
while len(queue) > 0:
  top = queue.popleft()
  parent_pk = top[0]
  categories.append({
    'fields': {
      'user': 0,
      'name': top[1],
      'parent': parent_pk
    },
    'model': 'api.Category',
    'pk': pk
  })
  parent_pk = pk

  for name, children in top[2].iteritems():
    queue.append((parent_pk, name, children))

  pk += 1

output += categories

with open('initial_data.json', 'w') as f:
  f.write(json.dumps(output, indent=2, separators=(',', ': ')))
