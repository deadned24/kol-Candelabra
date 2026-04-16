//Roman Candelabra. converts roman numbers into normal ones

  const romanToInt = (s) => {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return [...s.toUpperCase()].reduce((acc, curr, i, arr) => {
      const next = map[arr[i + 1]];
      return next > map[curr] ? acc - map[curr] : acc + map[curr];
    }, 0);
  };

  // joke wasn't even funny for a minute 
  $('span').filter(function() {
    return $(this).css('font-family').toLowerCase().includes('times new roman');
  }).each(function() {
    const $el = $(this);
    const text = $el.text().trim();

    if (/^[IVXLCDM]+$/i.test(text)) {
      $el.text(romanToInt(text)).css('font-family', '');
      if (!$el.attr('style')) $el.removeAttr('style');
    }
});
