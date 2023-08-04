import httpService from "./http.service"

const todosEndpoind = 'todos/'

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoind, {
      params: {
        _page: 1,
        _limit: 2
      }
    })
    return data
  },
  add: async () => {
    const { data } = await httpService.post(todosEndpoind, {
      userId:1,
      title:"New custom todo",
      completed:false
    })
    return data
  }
}

export default todosService
