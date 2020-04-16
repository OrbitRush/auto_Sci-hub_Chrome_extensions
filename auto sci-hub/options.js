var sci_hub_url = localStorage.sci_hub_url || 'https://sci-hub.tw';
document.getElementById('sci_hub_url').value = sci_hub_url;
document.getElementById('save').onclick = function(){
localStorage.sci_hub_url = document.getElementById('sci_hub_url').value;
alert('Saved!');
}