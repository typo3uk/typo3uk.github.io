$(function() {
  $.extend($.fn.bootstrapTable.defaults, {
    locale: 'uk-UA',
    search: true,
    pagination: true,
    sidePagination: 'server',
    showRefresh: true,
    search: true
  })
})


$('#phones').bootstrapTable({
  function detailFormatter(index, row) {
    var html = []
    const title = {
      'id': 'ID',
      'division': 'Відділ',
      'position': 'Посада',
      "name": "Прізвище ім'я по батькові",
      'room': 'Кабінет',
      'phones': 'Телефон',
      'atc': 'Телефон внутрішній'
    }
    $.each(row, function (key, value) {
      html.push('<span class="col-12 col-sm-2 col-md-4"><b>' + title[key] + '</b>: ' + value + '</span>')
    })
    return '<span class="row mx-0">' + html.join('') + '</span>'
  }
});

$('#table').bootstrapTable({

  function propertyFormatter(value, row, index) {
    return 'Продається <span class="text-lowercase"><strong>' + row.property + '</strong></span>, кімнат <strong>' + row.rooms + '</strong>, площа <strong>' + row.area + '</strong>, <a href="javascript:void(0)">ще...</a>';
  }

  function detailFormatter(index, row) {
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
      html.push('<span class="col-12 col-sm-2 col-md-4"><b>' + title[key] + '</b>: ' + value + '</span>')
    })
    return '<span class="row mx-0">' + html.join('') + '</span>'
  }

  function priceSorter(a, b) {
    var aa = a.replace('$', '')
    var bb = b.replace('$', '')
    return aa - bb
  }

});
