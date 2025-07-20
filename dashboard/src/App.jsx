import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LineChartComp from './components/LineChartComp'
import BarChartComp from './components/BarChartComp'
import NavbarComp from './components/NavbarComp'

function App() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en')
  const [currency, setCurrency] = useState('CAD')
  const [unit, setUnit] = useState('kg')
  const [year, setYear] = useState('2024')
  const [food, setFood] = useState('tomato')

  const changeLang = (e) => {
    const newLang = e.target.value
    setLang(newLang)
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="container py-4">
      <NavbarComp
        currency={currency}
        setCurrency={setCurrency}
        unit={unit}
        setUnit={setUnit}
      />

      <div className="row my-4">
        <div className="col-md-6">
          <label>{t('selectYear')}</label>
          <select className="form-select" value={year} onChange={e => setYear(e.target.value)}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="col-md-6">
          <label>{t('selectFood')}</label>
          <select className="form-select" value={food} onChange={e => setFood(e.target.value)}>
            <option value="tomato">{t('tomato')}</option>
            <option value="broccoli">{t('broccoli')}</option>
            <option value="cucumber">{t('cucumber')}</option>
            <option value="lettuce">{t('lettuce')}</option>
            <option value="carrot">{t('carrot')}</option>
          </select>
        </div>
      </div>

      <LineChartComp year={year} food={food} currency={currency} unit={unit} />
      <hr />
      <BarChartComp year={year} currency={currency} unit={unit} />
    </div>
  )
}

export default App