const provider = new ethers.providers.InfuraProvider("homestead", "a71874bbcb6a450398f24a7bbd436eda");

chrome.storage.sync.get("color", ({ color }) => {
  document.body.style.backgroundColor = color;
});
alert('hello');