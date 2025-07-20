import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { useTranslation } from 'react-i18next'

const syntheticPrices = {
  2023: {
    tomato: [1.2, 1.4, 1.3, 1.5, 1.4, 1.6, 1.7, 1.8, 2.0, 2.1, 2.0, 1.9],
    broccoli: [2.0, 2.2, 2.1, 2.3, 2.4, 2.5, 2.4, 2.6, 2.7, 2.9, 3.0, 3.1],
    cucumber: [1.0, 1.1, 1.0, 1.2, 1.3, 1.3, 1.4, 1.6, 1.5, 1.7, 1.8, 1.9],
    lettuce: [0.8, 0.9, 1.0, 1.0, 1.1, 1.1, 1.2, 1.2, 1.3, 1.4, 1.4, 1.5],
    carrot: [1.1, 1.2, 1.1, 1.3, 1.4, 1.4, 1.5, 1.6, 1.6, 1.7, 1.8, 1.8]
  },
  2024: {
    tomato: [1.3, 1.5, 1.6, 1.7, 1.7, 1.8, 1.9, 2.0, 2.1, 2.3, 2.2, 2.1],
    broccoli: [2.1, 2.3, 2.4, 2.6, 2.7, 2.6, 2.8, 3.0, 3.1, 3.0, 3.2, 3.3],
    cucumber: [1.1, 1.2, 1.3, 1.4, 1.3, 1.5, 1.7, 1.6, 1.8, 1.9, 2.0, 2.1],
    lettuce: [0.9, 1.0, 1.1, 1.2, 1.2, 1.3, 1.4, 1.4, 1.5, 1.6, 1.6, 1.7],
    carrot: [1.2, 1.3, 1.4, 1.5, 1.4, 1.6, 1.7, 1.7, 1.8, 1.8, 1.9, 2.0]
  }
}


function convertPrice(price, currency, unit) {
  let result = price
  if (currency === 'EUR') result *= 0.7
  if (unit === 'lb') result *= 0.45
  return parseFloat(result.toFixed(2))
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function LineChartComp({ food, year, currency, unit }) {
  const { t } = useTranslation()
  const data = months.map((m, i) => ({
    month: `${m} ${year}`,
    price: convertPrice(syntheticPrices[year][food][i], currency, unit)
  }))


  const currencySymbol = currency === 'EUR' ? '€' : '$'

  return (
    <div>
      <h3>{t('lineTitle', { item: t(food) })}</h3>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" angle={-45} textAnchor="end" interval={0} height={80} />
        <YAxis unit={currencySymbol} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          name={`${t(food)} (${currency}/${unit})`}
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  )
}