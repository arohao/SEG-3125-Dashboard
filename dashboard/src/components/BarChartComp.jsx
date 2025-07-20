import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
import { useTranslation } from 'react-i18next'

const syntheticPrices = {
  2023: {
    tomato: [2.1, 2.2, 2.3, 2.4, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1],
    broccoli: [2.4, 2.5, 2.6, 2.4, 2.5, 2.6, 2.7, 2.6, 2.8, 2.7, 2.9, 3.0],
    cucumber: [1.2, 1.3, 1.4, 1.3, 1.4, 1.5, 1.6, 1.5, 1.7, 1.8, 1.9, 2.0],
    lettuce: [1.0, 1.1, 1.2, 1.2, 1.3, 1.3, 1.4, 1.3, 1.5, 1.6, 1.6, 1.7],
    carrot: [1.5, 1.6, 1.7, 1.7, 1.8, 1.9, 2.0, 1.9, 2.1, 2.2, 2.3, 2.3]
  },
  2024: {
    tomato: [2.4, 2.5, 2.6, 2.7, 2.6, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4],
    broccoli: [2.7, 2.8, 2.9, 2.7, 2.8, 2.9, 3.0, 2.9, 3.1, 3.0, 3.2, 3.3],
    cucumber: [1.5, 1.6, 1.7, 1.6, 1.7, 1.8, 1.9, 1.8, 2.0, 2.1, 2.2, 2.3],
    lettuce: [1.3, 1.4, 1.5, 1.5, 1.6, 1.6, 1.7, 1.6, 1.8, 1.9, 1.9, 2.0],
    carrot: [1.8, 1.9, 2.0, 2.0, 2.1, 2.2, 2.3, 2.2, 2.4, 2.5, 2.6, 2.6]
  }
}


function convert(price, currency, unit) {
  let res = price
  if (currency === 'EUR') res *= 0.7
  if (unit === 'lb') res *= 0.45
  return parseFloat(res.toFixed(2))
}

const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length

export default function BarChartComp({ year, currency, unit }) {
  const { t } = useTranslation()
  const data = Object.entries(syntheticPrices[year]).map(([food, values]) => ({
    food: t(food),
    price: convert(average(values), currency, unit)
  }))


  const currencySymbol = currency === 'EUR' ? '€' : '$'

  return (
    <div>
      <h3>{t('barTitle')}</h3>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="food" />
        <YAxis unit={currencySymbol} />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" name={`Avg (${currency}/${unit})`} fill="#82ca9d" />
      </BarChart>
    </div>
  )
}