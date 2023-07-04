import React, {useState} from 'react'
import SelectField from '../common/form/selectField'
import TextField from '../common/form/textField'
import colors from '../../constants/colors.json'
// import useForm from '../../hooks/useForm'
// import { QualitiesContex } from '../../App'

const useForm = (initialState = {}, onSubmit) => {
  const [form, setForm] = useState(initialState)
  console.log('initialState :>> ', initialState);

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
  }
  const handleChange = (target) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  return { form, handleChange, handleSubmit }
}

const QualityForm = ({data, onSubmit}) => {
  // const { form, handleChange, handleSubmit } = useForm({}, onSubmit)
  const { form, handleChange, handleSubmit } = useForm(data, onSubmit)
  // const data = useContext(QualitiesContex)

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Наименование"
        name="name"
        onChange={handleChange}
        value={form.name || ''}
      />
      <SelectField
        label="Цвет"
        name="color"
        options={colors}
        onChange={handleChange}
        value={form.color || ''}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default QualityForm
