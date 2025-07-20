import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: "Food Price Dashboard",
      lineTitle: "Price of {{item}} in a Year",
      barTitle: "Average Prices by Food (Year)",
      selectYear: "Select Year",
      selectFood: "Select Food Item",
      tomato: "Tomato",
      broccoli: "Broccoli",
      cucumber: "Cucumber",
      lettuce: "Lettuce",
      carrot: "Carrot"
    }
  },
  fr: {
    translation: {
      title: "Tableau de Bord des Prix Alimentaires",
      lineTitle: "Prix de {{item}} dans un ans",
      barTitle: "Prix Moyens par Aliment (L'année)",
      selectYear: "Choisir l'année",
      selectFood: "Choisir un aliment",
      tomato: "Tomate",
      broccoli: "Brocoli",
      cucumber: "Concombre",
      lettuce: "Laitue",
      carrot: "Carotte"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n