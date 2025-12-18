const form = document.getElementById('statForm');
const success = document.getElementById('formSuccess');

if(form){
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if(res.ok){
      form.reset();
      success.style.display = 'block';
    }
  });
}
