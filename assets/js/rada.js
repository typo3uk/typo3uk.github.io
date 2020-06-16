
function propertyFormatter(value, row, index) {
  // return [row.property, row.rooms, row.area].join(', ')
  return 'Продається ' + row.property + ', кімнат: ' + row.rooms + ', площа: ' + row.area + ', <a href="javascript:void(0)">продавець...</a>';
}

function detailFormatter(index, row) {
  if (index == first) { first = '<span class="row">'; }
  if (index == last) { last = '</span>'; }
  var html = []
  const title = {
    'id': 'ID',
    'property': 'Власність',
    'rooms': 'Кімнат',
    "area": "Площа",
    'price': 'Ціна',
    'seller': 'Продавець',
    'phone': 'Телефон'
  }
  $.each(row, function (key, value) {
    html.push('' + first + '<span class="col"><b>' + title[key] + ':</b> ' + value + '</span>' + last + '')
  })
  return html.join('')
}
function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
