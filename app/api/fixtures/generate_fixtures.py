import json
from collections import deque

output = []

with open('institutions.json', 'r') as f:
  institutions = json.loads(f.read())

output += institutions

categories_def = {
  'transfers': {},
  'income': {
    'salary': {},
    'bonuses': {}
  },
  'expenses': {
    'retirement contributions': {},
    'rent': {},
    'gadgets': {},
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
_category_lookup = {}
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
  _category_lookup[top[1]] = pk
  parent_pk = pk

  for name, children in top[2].iteritems():
    queue.append((parent_pk, name, children))

  pk += 1

output += categories



category_rules_def = [
  {
    'csv_search_terms': 'WALGREENS',
    'category': 'toiletries'
  },
  {
    'csv_search_terms': 'SUBWAY, WENDY\'S, LE BOULANGER, DOMINO\'S, EAT CLUB, FIVE GUYS, CHIPOTLE, STARBUCKS, 7-ELEVEN, PAPA JOHN\'S, PIZZA HUT',
    'category': 'fast food'
  },
  {
    'csv_search_terms': 'GOOGLE *UBER, CALTRAIN TVM',
    'category': 'travel'
  },
  {
    'csv_search_terms': 'VESTA *T-MOBILE',
    'category': 'phone'
  },
  {
    'csv_search_terms': 'GOOGLE *Devices',
    'category': 'gadgets'
  },
  {
    'csv_search_terms': 'GOOGLE *Music',
    'category': 'leisure'
  },
  {
    'csv_search_terms': 'LUCKY, SAVE N GO MARKET',
    'category': 'groceries'
  }
]

pk = 0
category_rules = []
for rule in category_rules_def:
  category_rules.append({
    'fields': {
      'user': 0,
      'category': _category_lookup[rule['category']],
      'csv_search_rules': rule['csv_search_terms']
    },
    'model': 'api.CategoryRule',
    'pk': pk
  })
  pk += 1

output += category_rules


with open('initial_data.json', 'w') as f:
  f.write(json.dumps(output, indent=2, separators=(',', ': ')))
