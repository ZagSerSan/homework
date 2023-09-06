// listener
document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    remove(id).then(() => {
      event.target.closest('div.parent').remove()
    })
  }
  // edit
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    edit(id)
  }
})

// functions
async function edit(id) {
  const newContent = prompt()

  if (newContent) {
    await fetch(`/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id, title: newContent})
    })
    document.querySelector(`[data-id="${id}"]`).innerText = newContent
  }
}

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}
