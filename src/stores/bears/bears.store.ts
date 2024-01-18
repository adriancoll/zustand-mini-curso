import { create } from 'zustand'

type IncreaseFunction = (by: number) => void

interface Bear {
  id: number
  name: string
}

interface BearState {
  blackBears: number
  polarBears: number
  pandaBears: number

  computed: {
    totalBears: number
  }

  bears: Bear[]

  increaseBlackBears: IncreaseFunction
  increasePolarBears: IncreaseFunction
  increasePandaBears: IncreaseFunction

  doNothing: () => void

  addBear: () => void
  clearBears: () => void
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 0,
  polarBears: 0,
  pandaBears: 0,

  computed: {
    get totalBears() {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
    }
  },

  bears: [{
    id: 1,
    name: 'Oso #1'
  }],

  // Actions
  increaseBlackBears: (by) => set((state) => ({ blackBears: Math.max(0, state.blackBears + by) })),
  increasePolarBears: (by) => set((state) => ({ polarBears: Math.max(0, state.polarBears + by) })),
  increasePandaBears: (by) => set((state) => ({ pandaBears: Math.max(0, state.pandaBears + by) })),

  doNothing: () => set((state) => ({
    bears: [...state.bears],
  })),
  addBear: () => set((state) => ({
    bears: [...state.bears, {
      id: state.bears.length + 1,
      name: `Oso #${state.bears.length + 1}`
    }]
  })),
  clearBears: () => set(() => ({
    bears: []
  }))
}))