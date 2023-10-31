
import './sale.scss'

const sale = () => {
  // let totalDesc;
  // let totalPrice;
  // const calcDescProductSale = (valueProduct,valueDesc) => {
  //   this.total = valueProduct * valueDesc /100;
  //   this.totalPrice = valueProduct - valueDesc;
  // };
  const mock = [
    {
    img : "../../public/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : 7/11/2023,
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275,
    id:12
  },
    {
    img : "../../public/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : 7/11/2023,
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275,
    id:13
  },
    {
    img : "../../public/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : 7/11/2023,
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275,
    id:14
  },
    {
    img : "../../public/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : 7/11/2023,
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275,
    id:15
  },
]
  return (
    <div className="contentPromo">
      <h1 className="title">IMPERDÍVEOS DA SEMANA!</h1>
        {
          mock.map((item)=>{
            return(
              <div className="contentCardPromos" key={item.id}>
                  <figure>
                  <img
                      className="img-fluid"
                      src={item.img}
                      alt={item.nameProduct}
                    />
                  </figure>
                  <div className='infosCardContent'>
                    <div>
                      <h3>{item.nameProduct}</h3>
                      <p>PROMOCÃO ATÉ</p>
                      <p>{item.validDate}</p>
                      <p>{item.qtdParcelaSemJuros} X SEM JUROS</p>
                      <p>DESCONTO : {item.qtdDescontPix}% NO PIX</p>
                    </div>
                    <div>
                      <p> SAI DE R${item.valueProduct},00</p>
                      
                      {/* <p onClick={calcDescProductSale(item.valueProduct,item.qtdDescontPix).obj.totalPriceProduct}>POR R$ {totalPrice}</p>
                      <p>VOCÊ ECONOMIZA {totalDesc} </p> */}
                    </div>

                  </div>
              </div>

            )
          })
        }
      </div>
  )
}

export default sale