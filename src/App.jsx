import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'mx'
  }
]

function App () {
  const { t } = useTranslation()

  const releaseDate = new Date('2021-03-07')
  const timeDifference = new Date() - releaseDate
  // eslint-disable-next-line camelcase
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  return (
    <div className='container'>
      <div className='d-flex justify-content-end'>
        <div className='dropdown'>
          <button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
            Select your country
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            {languages.map(({ code, name, country_code: countryCode }) => (
              <li
                key={countryCode}
              >
                <button
                  className='dropdown-item'
                  onClick={() => changeLanguage(code)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='d-flex flex-column align-items-start'>
        <h1 className='font-weight-normal mb-3'>
          {t('welcome_message')}
        </h1>
        <p>{t('days_since_release', { number_of_days })}</p>
      </div>
    </div>
  )
}

export default App
