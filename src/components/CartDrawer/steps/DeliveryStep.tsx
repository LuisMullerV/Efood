import { FormEvent, useState } from 'react'
import { useCart } from '../../../contexts/useCart'
import * as S from './styles'

export default function DeliveryStep() {
  const { state, goToStep, setDelivery } = useCart()
  const [form, setForm] = useState(state.delivery)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setDelivery(form)
    goToStep('payment')
  }

  return (
    <>
      <S.Title>Entrega</S.Title>

      <S.Form onSubmit={onSubmit}>
        <S.Field>
          <S.Label>Quem vai receber?</S.Label>
          <S.Input
            value={form.receiver}
            onChange={e => setForm({ ...form, receiver: e.target.value })}
            required
          />
        </S.Field>

        <S.Field>
          <S.Label>Endereço</S.Label>
          <S.Input
            value={form.address}
            onChange={e => setForm({ ...form, address: e.target.value })}
            required
          />
        </S.Field>

        <S.TwoCols>
          <S.Field>
            <S.Label>Cidade</S.Label>
            <S.Input
              value={form.city}
              onChange={e => setForm({ ...form, city: e.target.value })}
              required
            />
          </S.Field>

          <S.Field>
            <S.Label>CEP</S.Label>
            <S.Input
              value={form.cep}
              onChange={e => setForm({ ...form, cep: e.target.value })}
              required
            />
          </S.Field>
        </S.TwoCols>

        <S.TwoCols>
          <S.Field>
            <S.Label>Número</S.Label>
            <S.Input
              value={form.number}
              onChange={e => setForm({ ...form, number: e.target.value })}
              required
            />
          </S.Field>

          <S.Field>
            <S.Label>Complemento</S.Label>
            <S.Input
              value={form.complement ?? ''}
              onChange={e => setForm({ ...form, complement: e.target.value })}
            />
          </S.Field>
        </S.TwoCols>

        <S.Actions>
          <S.ButtonSecondary type="button" onClick={() => goToStep('cart')}>
            Voltar
          </S.ButtonSecondary>
          <S.ButtonPrimary type="submit">Ir para pagamento</S.ButtonPrimary>
        </S.Actions>
      </S.Form>
    </>
  )
}
