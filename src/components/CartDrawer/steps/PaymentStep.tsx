import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { usePurchaseMutation } from '../../../services/api'
import { clearCart, prevStep } from '../../../store/cartSlice'
import { RootState } from '../../../store'
import { CartItem } from '../../../store/cartSlice' // Importando o tipo
import { Button, InputGroup, InputGroupRow, FormWrapper } from './styles'

const PaymentStep = () => {
  const dispatch = useDispatch()
  const [purchase, { isLoading }] = usePurchaseMutation()
  
  // Tipando o seletor corretamente
  const { items, delivery } = useSelector((state: RootState) => state.cart)

  const getTotalPrice = () => {
    // Tipando os parâmetros do reduce
    return items.reduce((acc: number, item: CartItem) => {
      return acc + (item.price || 0)
    }, 0)
  }

  const formik = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string().required('Obrigatório'),
      cardCode: Yup.string().required('Obrigatório'),
      expiresMonth: Yup.string().required('Obrigatório'),
      expiresYear: Yup.string().required('Obrigatório')
    }),
    onSubmit: async (values) => {
      if (!delivery) return alert('Dados de entrega ausentes')

      const payload = {
        // Tipando o map
        products: items.map((item: CartItem) => ({ 
          id: item.id, 
          price: item.price 
        })),
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.address,
            city: delivery.city,
            zipCode: delivery.cep,
            number: Number(delivery.number),
            complement: delivery.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      }

      try {
        await purchase(payload).unwrap()
        dispatch(clearCart())
      } catch (error) {
        console.error(error)
        alert('Erro ao processar pagamento.')
      }
    }
  })

  // @ts-ignore
  const hasError = (field: string) => formik.touched[field] && formik.errors[field]

  return (
    <FormWrapper>
    <form onSubmit={formik.handleSubmit}>
      <h3 style={{ color: '#FFEBD9', marginBottom: '16px' }}>
        Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}
      </h3>

      <InputGroup>
        <label htmlFor="cardOwner">Nome no cartão</label>
        <input
          id="cardOwner"
          type="text"
          name="cardOwner"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardOwner}
          className={hasError('cardOwner') ? 'error' : ''}
        />
      </InputGroup>

      <InputGroupRow>
        <InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <InputMask
            id="cardNumber"
            name="cardNumber"
            mask="9999.9999.9999.9999"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
            className={hasError('cardNumber') ? 'error' : ''}
          />
        </InputGroup>
        <InputGroup className="auto-width">
          <label htmlFor="cardCode">CVV</label>
          <InputMask
            id="cardCode"
            name="cardCode"
            mask="999"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardCode}
            className={hasError('cardCode') ? 'error' : ''}
          />
        </InputGroup>
      </InputGroupRow>

      <InputGroupRow>
        <InputGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <InputMask
            id="expiresMonth"
            name="expiresMonth"
            mask="99"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expiresMonth}
            className={hasError('expiresMonth') ? 'error' : ''}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <InputMask
            id="expiresYear"
            name="expiresYear"
            mask="99"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expiresYear}
            className={hasError('expiresYear') ? 'error' : ''}
          />
        </InputGroup>
      </InputGroupRow>

      <Button type="submit" className="margin-top" disabled={isLoading}>
        {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
      </Button>
      <Button type="button" className="secondary" onClick={() => dispatch(prevStep())}>
        Voltar para a entrega
      </Button>
    </form>
    </FormWrapper>
  )
}

export default PaymentStep