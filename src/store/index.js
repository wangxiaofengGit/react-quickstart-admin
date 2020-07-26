import { init } from '@rematch/core'
import { loading }  from './models/loading'

const store = init({
  models:{
    loading
  },
})

export default store
