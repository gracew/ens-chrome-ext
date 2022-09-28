function replace(el) {
    if (el.innerHTML.includes("0x")) {
        var results = /0x[0-9A-Fa-f]{40}/.exec(el.innerHTML);
        if (results && results.length > 0) {
            var address = results[0];
            provider.lookupAddress(address).then(resolved => {
                if (resolved) {
                    el.innerHTML = el.innerHTML.replace(address, resolved);
                }
            });

        }
    }
}

var provider = new ethers.providers.InfuraProvider("homestead", "a71874bbcb6a450398f24a7bbd436eda");

var text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

for (var el of text) {
    replace(el);
}