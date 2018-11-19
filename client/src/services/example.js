import api from './api'

export default {
  all: () => api.get('/examples'),
  create: (newExample) => api.post('/examples', newExample),
  delete: (id) => api.delete(`/examples/${id}`)
}
