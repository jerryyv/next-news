import { createContext, useContext, useState } from 'react'

const CategoryContext = createContext()

function CategoryProvider({children}) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const value = {selectedCategory, setSelectedCategory}

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}

function useCategory() {
  const context = useContext(CategoryContext)
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider')
  }
  return context
}

export {CategoryProvider, useCategory}