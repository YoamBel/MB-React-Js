import React from 'react';
import Pagination from '../../Pagination/Pagination';

const FilterSearch = ({returnAllArticles ,postsPerPage,AllArticlesLenght ,paginate}) =>{
  
    return (
        <div>
            <div className = "research-container">
                {returnAllArticles}
            </div>
            <div className = "container-pagination">
              <Pagination postsPerPage = {postsPerPage} totalArt = {AllArticlesLenght} paginate = {paginate}/>   
          </div>
        </div>
    )

}

export default FilterSearch

/*

                    const [Articles , setArticle] = useState([])

    const fetchFilterSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                let arr = [];
                res.map((item) => {
                    arr.push(
                        <div>
                            <Card aos = "fade-up" aos_offset = "100"
                                Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                                Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                                Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                                Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                                Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                                Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                                Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                                Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {"http://proj6.ruppin-tech.co.il/images/Slideimg2.jpg"}
                                Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                                Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                            </div>
                    )
                })
                
                setArticle(arr);
                console.log(Articles)
            })
            .catch((error) => {console.log(error)})    
    } 

    useEffect(() => {
        fetchFilterSearch()
    },[])



    <div className = "filter-search-ct-global ac-co-pro">
          
                <div className = "container-items ">
                   
                </div>

           </div>







    


           
    const [data ,setData] = useState([]);
    const [q , setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState([
        'Art_Libelle',
        'Art_Ref',
      ]);

    useEffect(() => {
        fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((json) => {setData(json)})
            .catch((error) => {console.log(error)})    
    },[])
    
    const search = (rows) =>{
        return (rows.filter((row) => row.Art_Libelle.toLowerCase().indexOf(q.toLowerCase()) > -1 || 
            row.Art_Ref.toLowerCase().indexOf(q.toLowerCase()) > -1 )
        )
    }
  
    const columns = data[0] && Object.keys(data[0])
    return (
        <div className = "reaserch-container">
            <div>
                <input
                type='text'
                value={q}
                onChange={(e) => setQ(e.target.value)}/>
                {columns &&
          columns.map((column) => (
            <label>
              <input
                type='checkbox'
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column],
                  );
                }}
              />
              {column}
            </label>
          ))}
            </div>
            <div><Datatable data = {search(data)}/></div> 
        </div>
    )





const FilterSearch = () =>{
    const [Articles , setArticle] = useState([]);
    const [ItemFilter , setItemFilter] = useState([])

    const [checkedStateTB, setCheckedStateTB] = useState(
        new Array(InputTypeBijoux.length).fill()
    );
    const [checkedStateGenre, setCheckedStateGenre] = useState(
        new Array(InputGenre.length).fill(false)
    );
    const [checkedStateColors, setCheckedStateColors] = useState(
        new Array(InputColors.length).fill(false)
    );
    const [checkedStatePierres, setCheckedStatePierres] = useState(
        new Array(InputPierres.length).fill(false)
    );
    const [checkedStateMetal, setCheckedStateMetal] = useState(
        new Array(InputMetal.length).fill(false)
    );
    const [checkedStateSousFamilles, setCheckedStateSousFamilles] = useState(
        new Array(InputSousFamilles.length).fill(false)
    );

    const fetchAllSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setArticle(res);
                setItemFilter(res)
            })
            .catch((error) => {console.log(error)})    
    } 


    

    const handleOnChangeFilterTB = (position , value) => {
        const updatedCheckedState = checkedStateTB.map((item, index) =>index === position ? !item : item);
        if(checkedStateTB[position] === false)
        {
            setItemFilter(Articles.filter(art => art.Familles_Id.includes(value)))  
        }   
        if(checkedStateTB[position] === true){setItemFilter(Articles)} 
        setCheckedStateTB(updatedCheckedState);    
    };

    const checkedTB = (j) => {
        for(let i = 0 ;i < InputTypeBijoux.length ; i++)
        {
            if(checkedStateTB[i] !== j)
            {
                checkedStateTB[i] = false
            }
            
        }
    }



    const handleOnChangeFilterGenre = (position) => {
        
        const updatedCheckedState = checkedStateGenre.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateGenre(updatedCheckedState);
    };
    const handleOnChangeFilterColors = (position) => {
        const updatedCheckedState = checkedStateColors.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateColors(updatedCheckedState); 
    };
    const handleOnChangeFilterPierres = (position) => {
        const updatedCheckedState = checkedStatePierres.map((item, index) =>
            index === position ? !item : item);
        setCheckedStatePierres(updatedCheckedState);
    };
    const handleOnChangeFilterMetal = (position) => {
        const updatedCheckedState = checkedStateMetal.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateMetal(updatedCheckedState);
    };
    const handleOnChangeFilterSousFamilles = (position) => {
        const updatedCheckedState = checkedStateSousFamilles.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateSousFamilles(updatedCheckedState);
    };

    useEffect(() => {
        fetchAllSearch();
        Aos.init();
    },[])

    return (
        <div className = "search-container">
            <div className = "inp-research">
                <input 
                type="text" 
                onChange = {""}
                placeholder = "Entrer votre article..."/>
            </div>  
            <div className = "check-items">
                <div className = "list-ul-left">
                    <ul className = "check-ul-items">
                        {InputItem.map(item => {
                            if(item.title === "Sous Familles"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputSousFamilles.map(sFam => {
                                        return (<ul className = {sFam.cNameUl}>
                                                <li key = {sFam.id} className = {sFam.cNameLi}>
                                                    <label><input type="checkbox" name = {sFam.iName} value={sFam.iName} checked={checkedStateSousFamilles[sFam.id]}onChange={() => handleOnChangeFilterSousFamilles(sFam.id)}/> {sFam.title}</label>
                                                </li>
                                            </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Types de bijoux"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputTypeBijoux.map(typeB => {
                                        return (<ul className = {typeB.cNameUl}>
                                                <li key = {typeB.id} className = {typeB.cNameLi}>
                                                    <label><input type="checkbox" onClick = {() => {checkedTB(typeB.id)}}  name = {typeB.iName} value={typeB.iName} checked={checkedStateTB[typeB.id]} onChange={() => handleOnChangeFilterTB(typeB.id,typeB.iName)}/>{typeB.title}</label>
                                                </li>
                                            </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Genre"){
                            return (<li key = {item.id} className = {item.cName}>
                                <h3 className = "check-h3-items">{item.title}</h3>
                                {InputGenre.map(genre => {
                                    return (<ul className = {genre.cNameUl}>
                                        <li key = {genre.id} className = {genre.cNameLi}>
                                            <label><input type="checkbox" name = {genre.iName} value={genre.iName} checked={checkedStateGenre[genre.id]}onChange={() => handleOnChangeFilterGenre(genre.id)}/> {genre.title}</label>
                                        </li>
                                    </ul>)
                                })}
                            </li>
                            )}
                            if(item.title === "Colors"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputColors.map(colors => {
                                        return (<ul className = {colors.cNameUl}>
                                            <li key = {colors.id} className = {colors.cNameLi}>
                                                <label><input type="checkbox" name = {colors.iName} value={colors.iName} checked={checkedStateColors[colors.id]}onChange={() => handleOnChangeFilterColors(colors.id)}/> {colors.title}</label>
                                            </li>
                                        </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Pierres"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputPierres.map(pierre => {
                                        return (<ul className = {pierre.cNameUl}>
                                            <li key = {pierre.id} className = {pierre.cNameLi}>
                                                <label><input type="checkbox" name = {pierre.iName} value={pierre.iName} checked={checkedStatePierres[pierre.id]}onChange={() => handleOnChangeFilterPierres(pierre.id)}/> {pierre.title}</label>
                                            </li>
                                        </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Metal"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputMetal.map(metal => {
                                        return (<ul className = {metal.cNameUl}>
                                            <li key = {metal.id} className = {metal.cNameLi}>
                                                <label><input type="checkbox" name = {metal.iName} value={metal.iName} checked={checkedStateMetal[metal.id]}onChange={() => handleOnChangeFilterMetal(metal.id)}/> {metal.title}</label>
                                            </li>
                                        </ul>)
                                    })}
                                </li>
                            )}
                            return(<li key = {item.id}/>)
                        })}
                    </ul>
                </div>
                <div className = "container-item2">
                    {ItemFilter.map(item =>  <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                    <Card
                        Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                        Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                        Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                        Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                        Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                        Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                        Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                        Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                        Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                        Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                    </div>)}
                </div>  
            </div>
                
                
        </div>
    )
}

export default FilterSearch




const [Articles , setArticle] = useState([]);
    const [ItemFilter , setItemFilter] = useState([])

    const [checkedStateTB, setCheckedStateTB] = useState(
        new Array(InputTypeBijoux.length).fill(false)
    );
    const [checkedStateGenre, setCheckedStateGenre] = useState(
        new Array(InputGenre.length).fill(false)
    );
    const [checkedStateColors, setCheckedStateColors] = useState(
        new Array(InputColors.length).fill(false)
    );
    const [checkedStatePierres, setCheckedStatePierres] = useState(
        new Array(InputPierres.length).fill(false)
    );
    const [checkedStateMetal, setCheckedStateMetal] = useState(
        new Array(InputMetal.length).fill(false)
    );
    const [checkedStateSousFamilles, setCheckedStateSousFamilles] = useState(
        new Array(InputSousFamilles.length).fill(false)
    );

    const fetchAllSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setArticle(res);
                setItemFilter(res)
            })
            .catch((error) => {console.log(error)})    
    } 


    

    const handleOnChangeFilterTB = (position , value) => {
        let arr=[]
        for(let i=0;i<Articles.length;i++){
            if(checkedStateTB[i]===true){
                console.log(Articles[i])
            }
        }

         const updatedCheckedState = checkedStateTB.map((item, index) =>index === position ? !item : item);
        if(checkedStateTB[position] === false)
        {
            setItemFilter(Articles.filter(art => art.Familles_Id.includes(value)))  
        }   
        if(checkedStateTB[position] === true){setItemFilter(Articles)} 
        setCheckedStateTB(updatedCheckedState);     
    };

    const checkedTB = (j) => {
        for(let i = 0 ;i < InputTypeBijoux.length ; i++)
        {
            if(i === j)
            {
                checkedStateTB[i] = !checkedStateTB[i];
            }
            console.log(checkedStateTB)
            
        }
    }



    const handleOnChangeFilterGenre = (position) => {
        
        const updatedCheckedState = checkedStateGenre.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateGenre(updatedCheckedState);
    };
    const handleOnChangeFilterColors = (position) => {
        const updatedCheckedState = checkedStateColors.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateColors(updatedCheckedState); 
    };
    const handleOnChangeFilterPierres = (position) => {
        const updatedCheckedState = checkedStatePierres.map((item, index) =>
            index === position ? !item : item);
        setCheckedStatePierres(updatedCheckedState);
    };
    const handleOnChangeFilterMetal = (position) => {
        const updatedCheckedState = checkedStateMetal.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateMetal(updatedCheckedState);
    };
    const handleOnChangeFilterSousFamilles = (position) => {
        const updatedCheckedState = checkedStateSousFamilles.map((item, index) =>
            index === position ? !item : item);
        setCheckedStateSousFamilles(updatedCheckedState);
    };

    useEffect(() => {
        fetchAllSearch();
        Aos.init();
    },[])

    return (
        <div className = "search-container">
            <div className = "inp-research">
                <input 
                type="text" 
                onChange = {""}
                placeholder = "Entrer votre article..."/>
            </div>  
            <div className = "check-items">
                <div className = "list-ul-left">
                    <ul className = "check-ul-items">
                        {InputItem.map(item => {
                            if(item.title === "Sous Familles"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputSousFamilles.map(sFam => {
                                        return (<ul className = {sFam.cNameUl}>
                                                <li key = {sFam.id} className = {sFam.cNameLi}>
                                                    <label><input type="checkbox" name = {sFam.iName} value={sFam.iName} checked={checkedStateSousFamilles[sFam.id]}onChange={() => handleOnChangeFilterSousFamilles(sFam.id)}/> {sFam.title}</label>
                                                </li>
                                            </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Types de bijoux"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputTypeBijoux.map(typeB => {
                                        return (<ul className = {typeB.cNameUl}>
                                                <li key = {typeB.id} className = {typeB.cNameLi}>
                                                    <label><input type="checkbox" 
                                                        onClick = {() => {checkedTB(typeB.id)}} 
                                                        name = {typeB.iName} 
                                                        value={typeB.iName} 
                                                        checked={checkedStateTB[typeB.id]} 
                                                        onChange={() => handleOnChangeFilterTB(typeB.id,typeB.iName)}/>
                                                        {typeB.title}</label>
                                                </li>
                                            </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Genre"){
                            return (<li key = {item.id} className = {item.cName}>
                                <h3 className = "check-h3-items">{item.title}</h3>
                                {InputGenre.map(genre => {
                                    return (<ul className = {genre.cNameUl}>
                                        <li key = {genre.id} className = {genre.cNameLi}>
                                            <label><input type="checkbox" name = {genre.iName} value={genre.iName} checked={checkedStateGenre[genre.id]}onChange={() => handleOnChangeFilterGenre(genre.id)}/> {genre.title}</label>
                                        </li>
                                    </ul>)
                                })}
                            </li>
                            )}
                            if(item.title === "Colors"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputColors.map(colors => {
                                        return (<ul className = {colors.cNameUl}>
                                            <li key = {colors.id} className = {colors.cNameLi}>
                                                <label><input type="checkbox" name = {colors.iName} value={colors.iName} checked={checkedStateColors[colors.id]}onChange={() => handleOnChangeFilterColors(colors.id)}/> {colors.title}</label>
                                            </li>
                                        </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Pierres"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputPierres.map(pierre => {
                                        return (<ul className = {pierre.cNameUl}>
                                            <li key = {pierre.id} className = {pierre.cNameLi}>
                                                <label><input type="checkbox" name = {pierre.iName} value={pierre.iName} checked={checkedStatePierres[pierre.id]}onChange={() => handleOnChangeFilterPierres(pierre.id)}/> {pierre.title}</label>
                                            </li>
                                        </ul>)
                                    })}
                                </li>
                            )}
                            if(item.title === "Metal"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputMetal.map(metal => {
                                        return (<ul className = {metal.cNameUl}>
                                            <li key = {metal.id} className = {metal.cNameLi}>
                                                <label><input type="checkbox" name = {metal.iName} value={metal.iName} checked={checkedStateMetal[metal.id]}onChange={() => handleOnChangeFilterMetal(metal.id)}/> {metal.title}</label>
                                            </li>
                                        </ul>)
                                    })}
                                </li>
                            )}
                            return(<li key = {item.id}/>)
                        })}
                    </ul>
                </div>
                <div className = "container-item2">
                    {ItemFilter.map(item =>  <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                    <Card
                        Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                        Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                        Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                        Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                        Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                        Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                        Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                        Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                        Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                        Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                    </div>)}
                </div>  
            </div>
                
                
        </div>
    )










    const [Articles , setArticle] = useState([]);
    const [ItemFilter , setItemFilter] = useState([])

    const [checkedStateTB, setCheckedStateTB] = useState(
        new Array(InputTypeBijoux.length).fill(false)
    );
    
    const fetchAllSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'POST',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            body:{
                arr:['PDT','BG']
            }
            })
            .then((response)=>response.json())
            .then((res) => {
                setArticle(res);
                setItemFilter(res)
            })
            .catch((error) => {console.log(error)})    
    } 
    useEffect(() => {
        fetchAllSearch();
        Aos.init();
    },[])


    const handleOnChangeFilterTB = (position , value) => {
        
        const updatedCheckedState = checkedStateTB.map((item, index) =>index === position ? !item : item);
        if(checkedStateTB[position] === false)
        {
            setItemFilter(Articles.filter(art => art.Familles_Id.includes(value)))  
        }   
        if(checkedStateTB[position] === true){setItemFilter(Articles)} 
        setCheckedStateTB(updatedCheckedState);     
    };

    const checkedTB = (j) => {
        for(let i = 0 ;i < InputTypeBijoux.length ; i++)
        {
            if(i === j)
            {
                checkedStateTB[i] = !checkedStateTB[i];
            }
            console.log(checkedStateTB)
            
        }
    }

    return (
        <div className = "search-container">
            <div className = "check-items">
                <div className = "list-ul-left">
                    <ul className = "check-ul-items">
                        {InputItem.map(item => {
                            if(item.title === "Types de bijoux"){
                                return (<li key = {item.id} className = {item.cName}>
                                    <h3 className = "check-h3-items">{item.title}</h3>
                                    {InputTypeBijoux.map(typeB => {
                                        return (<ul className = {typeB.cNameUl}>
                                                <li key = {typeB.id} className = {typeB.cNameLi}>
                                                    <label><input type="checkbox" 
                                                        onClick = {() => {checkedTB(typeB.id)}} 
                                                        name = {typeB.iName} 
                                                        value={typeB.iName} 
                                                        checked={checkedStateTB[typeB.id]} 
                                                        onChange={() => handleOnChangeFilterTB(typeB.id,typeB.iName)}/>
                                                        {typeB.title}</label>
                                                </li>
                                            </ul>)
                                    })}
                                </li>
                            )}

                            return(<li key = {item.id}/>)
                        })}
                    </ul>
                </div>
                <div className = "container-item2">
                    {ItemFilter.map(item =>  <div key = {item.Art_Num_ID} data-aos="fade-up" data-aos_offset = "100" className = "ct-card">
                    <Card
                        Art_Ref ={item.Art_Ref} Art_Libelle = {item.Art_Libelle}
                        Art_Description = {item.Art_Description} Art_Premium = {item.Art_Premium}
                        Familles_Id = {item.Familles_Id} SS_Fam_Id = {item.SS_Fam_Id}
                        Genres_Id = {item.Genres_Id} Pierres_Id = {item.Pierres_Id}
                        Metal_Id = {item.Metal_Id} Colors_Id = {item.Colors_Id}
                        Type_Art_Id = {item.Type_Art_Id} Art_Poids = {item.Art_Poids}
                        Art_PxVte_PubHT = {item.Art_PxVte_PubHT} Art_PxVte_GrosHT = {item.Art_PxVte_GrosHT}
                        Art_PxVte_Facon = {item.Art_PxVte_Facon} Art_Fic_Img1 = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`}
                        Art_Fic_Img2 = {item.Art_Fic_Img2} Art_Fic_Img3 = {item.Art_Fic_Img3}
                        Art_DatCre = {item.Art_DatCre} Art_DatMaj = {item.Art_DatMaj}/>
                    </div>)}
                </div>  
            </div>
                
                
        </div>
    )

    














    const [Articles , setArticle] = useState([]);
    const [ItemFilter , setItemFilter] = useState([])

   
    const [SousFamilles , setSousFamilles] = useState([]);
    const [Genres , setGenres] = useState([]);
    const [Metal , setMetal] = useState([]);
    const [Colors , setColors] = useState([]);
    const [Pierres , setPierres] = useState([]);

    const [teste , settest] = useState("");
    
    console.log(SousFamilles)
   
    /*Fetching 

    const fetchArticlesSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Articles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setArticle(res);
                setItemFilter(res)
            })
            .catch((error) => {console.log(error)})    
    } 

    const fetchSousFamillesSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/SousFamilles',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setSousFamilles(res);
            })
            .catch((error) => {console.log(error)})    
    } 

    const fetchGenresSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Genres',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setGenres(res);
            })
            .catch((error) => {console.log(error)})    
    } 

    const fetchMetalSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Metal',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setMetal(res);
            })
            .catch((error) => {console.log(error)})    
    } 

    const fetchColorsSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Colors',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setColors(res);
            })
            .catch((error) => {console.log(error)})    
    } 

    const fetchPierresSearch = async() => {
        await fetch('http://proj6.ruppin-tech.co.il/api/Pierres',{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((res) => {
                setPierres(res);
            })
            .catch((error) => {console.log(error)})    
    } 

    /*Handle Onchange 
    const handleOnChangeFilterSousFamilles = (value , position) => {
        console.log(value,position)
    }

   
    const checkedTB = (j) => {

        for(let i = 0 ;i < SousFamilles.length ; i++)
        {
            if(i !== j)
            {
                SousFamilles[i] = false
            }
            
        }
    }

    



    useEffect(() => {
        fetchArticlesSearch();
        fetchSousFamillesSearch();
        fetchGenresSearch();
        fetchMetalSearch();
        fetchColorsSearch();
        fetchPierresSearch();
        Aos.init();
    },[])

    return (
        <div className = "search-container">
            <div className = "inp-research">
                <input 
                type="text" 
                onChange = {""}
                placeholder = "Entrer votre article..."/>
            </div>  
            <div className = "check-items">
              
                    <ul className = "check-ul-items">
                        {InputItem.map(item => {
                            if(item.title === "Types de bijoux")
                            {
                                return (
                                    <li key = {item.id} className = {item.cName}>
                                        <h3 className = "check-h3-items">{item.title}</h3>
                                        {SousFamilles.map((itemSF,index) => {
                                            return (
                                                <ul className = "inp-ul-items">
                                                    <li key = {index} className = "inp-li-items">
                                                        <label>
                                                            <input type="checkbox" 
                                                            name = {itemSF.SS_Fam_Lib} 
                                                            value={itemSF.SS_Fam_Id}
                                                            onClick = {() => {checkedTB(index)}}
                                                            defaultChecked = {!SousFamilles[index]}                                                       
                                                            onChange={() => {handleOnChangeFilterSousFamilles(itemSF.SS_Fam_Id,index)}}/>
                                                            {itemSF.SS_Fam_Lib}
                                                        </label>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                )
                            }
                            if(item.title === "Genre")
                            {
                                return (
                                    <li key = {item.id} className = {item.cName}>
                                        <h3 className = "check-h3-items">{item.title}</h3>
                                        {Genres.map(itemG => {
                                            return (
                                                <ul className = "inp-ul-items">
                                                    <li key = {itemG.Genres_Id} className = "inp-li-items">
                                                        <label>
                                                            <input type="checkbox" 
                                                            name = {itemG.Genres_Lib} 
                                                            value={itemG.Genres_Id}                                                           
                                                            onChange={""}/>
                                                            {itemG.Genres_Lib}
                                                        </label>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                )
                            }
                            if(item.title === "Matière")
                            {
                                return (
                                    <li key = {item.id} className = {item.cName}>
                                        <h3 className = "check-h3-items">{item.title}</h3>
                                        {Metal.map(itemM => {
                                            return (
                                                <ul className = "inp-ul-items">
                                                    <li key = {itemM.Metal_Id} className = "inp-li-items">
                                                        <label>
                                                            <input type="checkbox" 
                                                            name = {itemM.Metal_Lib} 
                                                            value={itemM.Metal_Id} 
                                                            onChange={""}/>
                                                            {itemM.Metal_Lib}
                                                        </label>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                )
                            }
                            if(item.title === "Couleurs")
                            {
                                return (
                                    <li key = {item.id} className = {item.cName}>
                                        <h3 className = "check-h3-items">{item.title}</h3>
                                        {Colors.map(itemC => {
                                            return (
                                                <ul className = "inp-ul-items">
                                                    <li key = {itemC.Colors_Id} className = "inp-li-items">
                                                        <label>
                                                            <input type="checkbox" 
                                                            name = {itemC.Colors_Lib} 
                                                            value={itemC.ColorsId} 
                                                            onChange={""}/>
                                                            {itemC.Colors_Lib}
                                                        </label>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                )
                            }
                            if(item.title === "Pierres")
                            {
                                return (
                                    <li key = {item.id} className = {item.cName}>
                                        <h3 className = "check-h3-items">{item.title}</h3>
                                        {Pierres.map(itemP => {
                                            return (
                                                <ul className = "inp-ul-items">
                                                    <li key = {itemP.Pierres_Id} className = "inp-li-items">
                                                        <label>
                                                            <input type="checkbox" 
                                                            name = {itemP.Pierres_Lib} 
                                                            value={itemP.Pierres_Id} 
                                                            onChange={""}/>
                                                            {itemP.Pierres_Lib}
                                                        </label>
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                )
                            }
                            return(<li key = {item.id}/>)
                        })}
                    </ul>

               
            </div>
          
            
        </div> 
    )
*/