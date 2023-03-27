import React from 'react'
import { Form, HeaderContainer } from './HeaderStyle'
import searchIcon from '../../assets/search.svg'
import locationIcon from '../../assets/location.svg'
import chevronDown from '../../assets/chevron-down.svg'

const Header = (props) => {
    const cidadesArray = [
        "São Paulo",
        "Salvador",
        "Porto Alegre",
        "Rio de Janeiro",
        "Florianópolis",
        "Curitiba"
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form was submitted!');
      };
    

    const onChangeBuscarBloco = (event) => {
        props.setBuscarBloco(event.target.value)
    }

    const onChangeCidade = (event) => {
        props.setCidade(event.target.value)
    }
    

  return (
    <HeaderContainer>
        <div className="content">
            <div className="top">
                <p>Find your block</p>
                <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
            </div>

            <Form class="search">
                <div className='search-field'>
                    <label for="name">Pesquise por nome</label>
                    <img src={searchIcon} alt="Search icon"/>
                    <input type="text" id="name" name="name" placeholder="Pesquise por nome" value={props.buscarBloco} onChange={onChangeBuscarBloco}/>
                </div>
                <div className='search-field select'>
                    <img src={locationIcon} alt="location Icon"/>
                    <label for="city"></label>
                    <select name="city" id="city" value={props.cidade} onChange={onChangeCidade}>
                        <option value="">Selecione sua cidade</option>
                        {cidadesArray.map((cidade) => {
                                return (
                                    <option key={cidade} value={cidade}>
                                        {cidade}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <img class="open-selection" src={chevronDown} alt="chevron Down icon" />
                </div>
                {/* <button>Buscar Agora</button> */}
            </Form>
        </div>
    </HeaderContainer>
  )
}

export default Header