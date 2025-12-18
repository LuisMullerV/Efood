import { FormEvent, useState } from 'react'
import { useCart } from '../../../contexts/useCart'
import * as S from './styles'

export default function PaymentStep() {
  const { state, goToStep, setPayment, setOrder } = useCart()
  const [form, setForm] = useState(state.payment)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setPayment(form)
    setOrder()
  }

  return (
    <>
      <S.Title>Pagamento</S.Title>

      <S.Form onSubmit={onSubmit}>
        <S.Field>
          <S.Label>Nome no cartão</S.Label>
          <S.Input
            value={form.cardName}
            onChange={e => setForm({ ...form, cardName: e.target.value })}
            required
          />
        </S.Field>

        <S.Field>
          <S.Label>Número do cartão</S.Label>
          <S.Input
            value={form.cardNumber}
            onChange={e => setForm({ ...form, cardNumber: e.target.value })}
            required
          />
        </S.Field>

        <S.TwoCols>
          <S.Field>
            <S.Label>CVV</S.Label>
            <S.Input
              value={form.cvv}
              onChange={e => setForm({ ...form, cvv: e.target.value })}
              required
            />
          </S.Field>

          <S.Field>
            <S.Label>Validade (MM)</S.Label>
            <S.Input
              value={form.expMonth}
              onChange={e => setForm({ ...form, expMonth: e.target.value })}
              required
            />
          </S.Field>
        </S.TwoCols>

        <S.Field>
          <S.Label>Validade (AAAA)</S.Label>
          <S.Input
            value={form.expYear}
            onChange={e => setForm({ ...form, expYear: e.target.value })}
            required
          />
        </S.Field>

        <S.Actions>
          <S.ButtonSecondary type="button" onClick={() => goToStep('delivery')}>
            Voltar
          </S.ButtonSecondary>
          <S.ButtonPrimary type="submit">Finalizar pedido</S.ButtonPrimary>
        </S.Actions>
      </S.Form>
    </>
  )
}
