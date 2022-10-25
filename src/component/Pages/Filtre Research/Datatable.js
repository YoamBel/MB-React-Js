import React , {useState,useEffect} from 'react'
import '../styles/Datatable.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import DetailDatatable from './DetailDatatable';
import { AiOutlineClose } from "react-icons/ai";

const Datatable = ({data,AddShop}) => {
  
  const [DetailCard, setDetailCard] = useState(false)
  const [ItemDetailCard , setItemDetailCard] = useState([])

  const OpenArt = (item) => {
    setDetailCard(!DetailCard)
    setItemDetailCard(item)
  }

  const CloseDetail = () => {
    setDetailCard(false)
    }
  
  useEffect(() => {
   Aos.init();
  },[])



  const CardDetailItem = DetailCard && <div className ={DetailCard ? "det-card2" : "det-card-close2"}>
        <div className = "bx-btn-close-dt-card2">
        <button type = "submit" className ="btn-close-dt-card2" onClick = {() => {CloseDetail()}}><AiOutlineClose size ={24}/></button>
        </div>
        <DetailDatatable ItemDetailCard = {ItemDetailCard} DetailCard = {DetailCard} AddShop={AddShop}/>
       
  </div>

  const Articles = data.map(item => {
    return (<div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100"  className = "ct-card2">
    <div className = "imgBx2">
        <img src = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`} className = "card-image2" alt = "" />
    </div>
    <div className = "tltBx2">
        <h3 className = "card-title2">{item.Art_Libelle}</h3>
        <p className = "card-ref2"> ref :{item.Art_Ref}</p>
    </div>
    <div className = "btnBx2">
        <button onClick = {() => OpenArt(item)} className="card-btn2">Voir l'article </button>
        <button className ="card-btn-add-sh2" type = "submit" onClick = {()=> {AddShop(item)}}>Ajouter au panier</button>
    </div>               
  </div>)
  })
  

  //pagination filter
  return (
    
    <div className = "container-item3">
          {Articles}
          {CardDetailItem}
        
    </div>
  )
    
}

export default Datatable

/*
{data}

const columns = data[0] && Object.keys(data[0])

    return (
        <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    )
*/