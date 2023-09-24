import { defineStore } from 'pinia'

export const useSrosStore = defineStore('data',{
  s: 'null',
  state: () => ({
    sros: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchSros(s) {
      this.sros = []
      this.loading = true
      try {
//        this.sros = await fetch(`http://trip.uprogs.ru/sros/${s}`)
        this.sros = await fetch(`/data/sros.json`)
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})