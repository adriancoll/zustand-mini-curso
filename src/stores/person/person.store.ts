import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { firebaseStorage } from '../storage/firebase.storage'

interface PersonState {
  firstName: string
  lastName: string

}

interface Actions {
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (value) => set({ firstName: value }),
  setLastName: (value) => set({ lastName: value }),
})


export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(
      storeApi,
      {
        name: 'person-storage',
        storage: firebaseStorage
      }
    ))
)