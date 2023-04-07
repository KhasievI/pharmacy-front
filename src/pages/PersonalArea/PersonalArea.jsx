import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './PersonalArea.module.scss'
import { fetchMedicineById, addMedicine, deleteMedicine, updateMedicine } from '../../redux/features/medicineSlice'
import { fetchCategories } from '../../redux/features/categorySlice'


export const PersonalArea = () => {
  const [selection, setSelection] = useState('-')
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
  const [countInStock, setCountInStock] = useState()
  const [cat, setCat] = useState('-')

  const [medId, setMedId] = useState('')
  const [getMed, setGetMed] = useState(false)

  const pharmacy = useSelector((state) => state.pharmacy.pharmacy)
  const categories = useSelector((state) => state.category.categories);
  const { status, medicine } = useSelector((state) => state.medicine)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status) {
      toast(status)
    }
  }, [status])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const handleSubmit = () => {
    if (selection === 'Add') {
      const data = new FormData()
      data.append('pharmacyName', pharmacy.pharmacyName)
      data.append('address', pharmacy.address)
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
    } else if (selection === 'Delete') {
      dispatch(deleteMedicine(medId))
    } else if (selection === 'Update') {
      if (!getMed) {
        dispatch(fetchMedicineById(medId))
        setImg(medicine.img)
        setName(medicine.medName)
        setWeight(medicine.weight)
        setMethodOfAdministration(medicine.methodOfAdministrationAndDose)
        setTypeOfDosageForm(medicine.typeOfDosageForm)
        setDateOfManufacture(medicine.dateOfManufacture)
        setExpirationDate(medicine.expirationDate)
        setSeries(medicine.series)
        setPrice(medicine.price)
        setBarcode(medicine.barcode)
        setStorageConditions(medicine.storageConditions)
        setCountInStock(medicine.countInStock)
        setCat(medicine.category)
        setGetMed(true)
      } 
      if (getMed) {
        const data = new FormData()
        data.append('pharmacyName', pharmacy.pharmacyName)
        data.append('address', pharmacy.address)
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
        setImg('')
        setName('')
        setWeight('')
        setMethodOfAdministration('')
        setTypeOfDosageForm('')
        setDateOfManufacture('')
        setExpirationDate('')
        setSeries('')
        setPrice('')
        setBarcode('')
        setStorageConditions('')
        setCountInStock()
        setCat('')
        setGetMed(false)
        setMedId('')
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <select className={styles.action_choice} value={selection} onChange={(e) => { setSelection(e.target.value) }}>
          <option className={styles.action_choice_el}> - </option>
          <option className={styles.action_choice_el}>Add</option>
          <option className={styles.action_choice_el}>Delete</option>
          <option className={styles.action_choice_el}>Update</option>
        </select>
        <input
          className={styles.inputId}
          type='text'
          placeholder='Введите ID товара'
          value={medId} onChange={(e) => setMedId(e.target.value)}
        />
        <button type='submit'
          onClick={handleSubmit} className={styles.btn}>Отправить</button>
      </form>
      {selection === 'Add' && (
        <div className={styles.medicine}>
          <input disabled={true} value={pharmacy.pharmacyName} />
          <input disabled={true} value={pharmacy.address} />

          <label className={styles.Attach}>
          <input
            type='file'
            className={styles.hidden}
            onChange={(e) => setImg(e.target.files[0])}
            placeholder='Logo'
          />
          {img && (
            <img className={styles.img} src={URL.createObjectURL(img)} alt={img.name} />
          )}
        </label>

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
            <option>-</option>
            {categories.map(category => {
              return <option key={category._id}>{category.name}</option>
            })}
          </select>
        </div>
      )}
      {selection === 'Update' && (
        <div className={styles.medicine}>
          <input disabled={true} value={pharmacy.pharmacyName} />
          <input disabled={true} value={pharmacy.address} />
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
            <option>-</option>
            {categories.map(category => {
              return <option key={category._id}>{category.name}</option>
            })}
          </select>
        </div>
      )}
    </div>
  )
}