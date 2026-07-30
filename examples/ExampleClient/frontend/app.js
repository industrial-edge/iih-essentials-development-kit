(function () {
    var ids = ['assets', 'aspects', 'attributes'];

    function setValue(key, text, state) {
        var el = document.getElementById('count-' + key);
        if (!el) {
            return;
        }
        el.textContent = text;
        el.classList.remove('loading', 'error');
        if (state) {
            el.classList.add(state);
        }
    }

    fetch('./Status')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            ids.forEach(function (key) {
                var value = data[key];
                setValue(key, typeof value === 'number' ? value.toLocaleString() : '—');
            });
        })
        .catch(function () {
            ids.forEach(function (key) {
                setValue(key, '—', 'error');
            });
        });
})();
