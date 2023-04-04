import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './PersonalArea.module.scss'
import { checkIsAuth } from '../../redux/features/pharmacySlice'
import { addMedicine, deleteMedicine, updateMedicine } from '../../redux/features/medicineSlice'
import { fetchCategories } from '../../redux/features/categorySlice'
import { getPharmacies } from '../../redux/features/pharmacySlice'
import { getPharmacy } from '../../redux/features/pharmacySlice'

export const PersonalArea = () => {
  const [med, setMed] = useState('-')
  const [pharmacyName, setPharmName] = useState('')
  const [address, setAddress] = useState('')
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [methodOfAdministration, setMethodOfAdministration] = useState('')
  const [typeOfDosageForm, setTypeOfDosageForm] = useState('')
  const [dateOfManufacture, setDateOfManufacture] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [series, setSeries] = useState('')
  const [price, setPrice] = useState('')
  const [barcode, setBarcode] = useState('')
  const [storageConditions, setStorageConditions] = useState('')
  const [countInStock, setCountInStock] = useState('')
  const [cat, setCat] = useState('-')

  const [medId, setMedId] = useState('')

  const { id } = useParams();
  const dispatch = useDispatch()

  const pharmacy = useSelector((state) => state.pharmacy.pharmacy)
  const pharmacies = useSelector((state) => state.pharmacy.pharmacies)
  const categories = useSelector((state) => state.category.categories);
  const { status } = useSelector((state) => state.medicine)

  console.log('status', status);

  useEffect(() => {
    if (status) {
      toast(status)
    }
  }, [status])

  console.log('pharmacy', pharmacy);

  useEffect(() => {
    dispatch(getPharmacy(id))
  }, [])

  useEffect(() => {
    dispatch(getPharmacy())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPharmacies())
  }, [])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const handleSubmit = () => {
    if (med === 'Add') {
      const data = new FormData()
      data.append('pharmacyName', pharmacyName)
      data.append('address', address)
      data.append('img', img)
      data.append('name', name)
      data.append('weight', weight)
      data.append('methodOfAdministration', methodOfAdministration)
      data.append('typeOfDosageForm', typeOfDosageForm)
      data.append('dateOfManufacture', dateOfManufacture)
      data.append('expirationDate', expirationDate)
      data.append('series', series)
      data.append('price', price)
      data.append('barcode', barcode)
      data.append('storageConditions', storageConditions)
      data.append('countInStock', countInStock)
      data.append('cat', cat)
      dispatch(addMedicine({ data }))
    } else if (med === 'Delete') {
      dispatch(deleteMedicine(medId))
    } else if (med === 'Update') {
      const data = new FormData()
      data.append('pharmacyName', pharmacyName)
      data.append('address', address)
      data.append('img', img)
      data.append('name', name)
      data.append('weight', weight)
      data.append('methodOfAdministration', methodOfAdministration)
      data.append('typeOfDosageForm', typeOfDosageForm)
      data.append('dateOfManufacture', dateOfManufacture)
      data.append('expirationDate', expirationDate)
      data.append('series', series)
      data.append('price', price)
      data.append('barcode', barcode)
      data.append('storageConditions', storageConditions)
      data.append('countInStock', countInStock)
      data.append('cat', cat)
      dispatch(updateMedicine({ medId, data }))
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <select className={styles.action_choice} value={med} onChange={(e) => { setMed(e.target.value) }}>
          <option className={styles.action_choice_el}> - </option>
          <option className={styles.action_choice_el}>Add</option>
          <option className={styles.action_choice_el}>Delete</option>
          <option className={styles.action_choice_el}>Update</option>
        </select>
        <input
          type='text'
          placeholder='Введите текст'
          value={medId} onChange={(e) => { setMedId(e.target.value) }}
        />
        <button type='submit'
          onClick={handleSubmit} className={styles.btn}>Отправить</button>
      </form>
      {med === 'Add' && (
        <div className={styles.medicine}>
          <input value={pharmacyName} onChange={(e) => setPharmName(e.target.value)} />
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type='text' name='img' placeholder='File' value={img} onChange={(e) => setImg(e.target.value)} />
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='text' placeholder='Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          <input type='text' placeholder='Method of administration and dose'
            value={methodOfAdministration} onChange={(e) => setMethodOfAdministration(e.target.value)} />
          <input type='text' placeholder='Type of dosage form'
            value={typeOfDosageForm} onChange={(e) => setTypeOfDosageForm(e.target.value)} />
          <input type='text' placeholder='Date of manufacture'
            value={dateOfManufacture} onChange={(e) => setDateOfManufacture(e.target.value)} />
          <input type='text' placeholder='Expiration date'
            value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
          <input type='text' placeholder='Series' value={series} onChange={(e) => setSeries(e.target.value)} />
          <input type='text' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type='text' placeholder='Barcode' value={barcode} onChange={(e) => setBarcode(e.target.value)} />
          <input type='text' placeholder='Storage conditions'
            value={storageConditions} onChange={(e) => setStorageConditions(e.target.value)} />
          <input type='number' placeholder='Count in stock'
            value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
          <select className={styles.cat} value={cat} onChange={(e) => { setCat(e.target.value) }}>
            {categories.map(category => {
              return <option key={category._id}>{category.name}</option>
            })}
          </select>
        </div>
      )}
      {med === 'Update' && (
        <div className={styles.medicine}>
          <input value={pharmacyName} onChange={(e) => setPharmName(e.target.value)} />
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type='text' name='img' placeholder='File' value={img} onChange={(e) => setImg(e.target.value)} />
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='text' placeholder='Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          <input type='text' placeholder='Method of administration and dose'
            value={methodOfAdministration} onChange={(e) => setMethodOfAdministration(e.target.value)} />
          <input type='text' placeholder='Type of dosage form'
            value={typeOfDosageForm} onChange={(e) => setTypeOfDosageForm(e.target.value)} />
          <input type='text' placeholder='Date of manufacture'
            value={dateOfManufacture} onChange={(e) => setDateOfManufacture(e.target.value)} />
          <input type='text' placeholder='Expiration date'
            value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
          <input type='text' placeholder='Series' value={series} onChange={(e) => setSeries(e.target.value)} />
          <input type='text' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type='text' placeholder='Barcode' value={barcode} onChange={(e) => setBarcode(e.target.value)} />
          <input type='text' placeholder='Storage conditions'
            value={storageConditions} onChange={(e) => setStorageConditions(e.target.value)} />
          <input type='number' placeholder='Count in stock'
            value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
          <select className={styles.cat} value={cat} onChange={(e) => { setCat(e.target.value) }}>
            {categories.map(category => {
              return <option key={category._id}>{category.name}</option>
            })}
          </select>
        </div>
      )}
    </div>
  )
}