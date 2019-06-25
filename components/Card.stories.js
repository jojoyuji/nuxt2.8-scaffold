// /components/list/List.stories.js
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Card from './Card'


let date = new Date();

storiesOf('Card', module)
  .add('As a component', () => ({
    components: { Card },
    template: `
    <Card
    title="Meu titulo vem aqui"
    description="
      Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis.
      Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.
      Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
      Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.
      Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
    "
    date="${date}"
    location="meu local aqui"
    image="https://via.placeholder.com/500x150"
    />
    `
  }))
  .add('title hello', () => '<Card :title="hello" />')
