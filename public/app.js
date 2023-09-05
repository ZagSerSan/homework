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
    // const newTitle =  prompt()

    edit(id)
    // edit(id, newTitle).then(() => {
    //   document.querySelector(`[data-id="${id}"]`).innerText = newTitle
    // })
  }
})

async function edit(id) {
  const newContent = prompt()
  await fetch(`/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify({title: newContent, id})
   })
}

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}
