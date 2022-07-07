import Title from './Title'
import Text from './Text'
import Image from './Image'
import './Card.css'

function Card(props) {
    return (
        <section>
            <Title class="card-title" Title={props.Title}></Title>
            <Image class="img" src={props.Image}></Image>
            <Text Text={props.Text}></Text>
        </section>
    )
}

export default Card