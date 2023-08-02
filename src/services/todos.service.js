import httpService from "./http.service"

const todosEndpoind = 'todos/'

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoind, {
      params: {
        _page: 1,
        _limit: 10
      }
    })
    return data
  } 
}

export default todosService
