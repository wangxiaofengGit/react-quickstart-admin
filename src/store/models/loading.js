export const loading = {
    
    state:{
        loading:false
    },

    reducers: {
      setState(state, payload) {
        return {...state, ...payload}
      }
    },
    
    effects: {
      async setLoading(payload, rootState) {
        await this.setState({loading: payload})
      }
    }
  }
  