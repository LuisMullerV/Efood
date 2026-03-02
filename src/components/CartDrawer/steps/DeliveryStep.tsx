import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { addDeliveryDetails, nextStep, goToCart } from '../../../store/cartSlice'
import { Button, InputGroup, InputGroupRow, FormWrapper } from './styles'

const DeliveryStep = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Obrigatório'),
      address: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      cep: Yup.string().required('Obrigatório').min(9, 'CEP inválido'),
      number: Yup.string().required('Obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(addDeliveryDetails(values))
      dispatch(nextStep())
    }
  })

  // @ts-ignore
  const hasError = (field: string) => formik.touched[field] && formik.errors[field]

  return (
    <FormWrapper>
    <form onSubmit={formik.handleSubmit}>
      <h3 style={{ color: '#FFEBD9', marginBottom: '16px' }}>Entrega</h3>

      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          id="receiver"
          type="text"
          name="receiver"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.receiver}
          className={hasError('receiver') ? 'error' : ''}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          type="text"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className={hasError('address') ? 'error' : ''}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          type="text"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className={hasError('city') ? 'error' : ''}
        />
      </InputGroup>

      <InputGroupRow>
        <InputGroup className="auto-width">
          <label htmlFor="cep">CEP</label>
          <InputMask
            id="cep"
            name="cep"
            mask="99999-999"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cep}
            className={hasError('cep') ? 'error' : ''}
          />
        </InputGroup>
        <InputGroup className="auto-width">
          <label htmlFor="number">Número</label>
          <input
            id="number"
            type="number"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            className={hasError('number') ? 'error' : ''}
          />
        </InputGroup>
      </InputGroupRow>

      <InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input
          id="complement"
          type="text"
          name="complement"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.complement}
        />
      </InputGroup>

      <Button type="submit" className="margin-top">Continuar com o pagamento</Button>
      <Button type="button" className="secondary" onClick={() => dispatch(goToCart())}>Voltar para o carrinho</Button>
    </form>
    </FormWrapper>
  )
}

export default DeliveryStep