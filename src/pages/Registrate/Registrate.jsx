import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './Registrate.module.scss'
import { checkIsAuth, registratePharmacy } from '../../redux/features/pharmacySlice'

export const Registrate = () => {
  const [pharmacyName, setPharmacyName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [logo, setLogo] = useState('')
  const [license, setLicense] = useState('')
  const [ogrn, setOgrn] = useState('')
  const [inn, setInn] = useState('')
  const { status } = useSelector((state) => state.pharmacy)
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pharmacy } = useSelector((state) => state.pharmacy)

  console.log(isAuth);
  useEffect(() => {
    if (status) {
      toast(status)
    }
    if (isAuth) navigate(`/${pharmacy._id}`)
  }, [status, isAuth, navigate, pharmacy])

  const handleSubmit = () => {
    try {
      const data = new FormData()
      data.append('pharmacyName', pharmacyName)
      data.append('password', password)
      data.append('logo', logo)
      data.append('address', address)
      data.append('license', license)
      data.append('ogrn', ogrn)
      data.append('inn', inn)
      dispatch(registratePharmacy({data}))
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <h1>Регистрация</h1>
      <label>
        Наименование организации:
        <input
          type='text'
          value={pharmacyName}
          onChange={(e) => setPharmacyName(e.target.value)}
          placeholder='Pharmacy'
        />
      </label>
      <label>
        Пароль:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </label>
      <label>
        Логотип:
        <input
          type='file'
          className={styles.hidden}
          onChange={(e) => setLogo(e.target.files[0])}
          placeholder='Logo'
        />
         {logo && (
          <img src={URL.createObjectURL(logo)} alt={logo.name} />
        )}
      </label>
      <label>
        Адрес:
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Address'
        />
      </label>
      <label>
        Лицензия:
        <input
          type='text'
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          placeholder='License'
        />
      </label>
      <label>
        ОГРН:
        <input
          type='text'
          value={ogrn}
          onChange={(e) => setOgrn(e.target.value)}
          placeholder='OGRN'
        />
      </label>
      <label>
        ИНН:
        <input
          type='text'
          value={inn}
          onChange={(e) => setInn(e.target.value)}
          placeholder='INN'
        />
      </label>
      <div className={styles.divBtns}>

        <button
          type='submit'
          onClick={handleSubmit}
          className={styles.login}
        >
          Подтвердить
        </button>
        <Link
          to='/login'
          className={styles.link}
        >
          Уже зарегистрированы ?
        </Link>
      </div>
    </form>
  )
}