import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Legumes from '../../utils/mocks/legumes.json'
const Results = () => {
    const [legume, setLegume] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [isSelectedMonth, setIsSelectedMonth] = useState(false)
    useEffect(() => {
        setLegume(Legumes)
        // axios.get(Legumes).then((response) => setLegume(response))
        //     .catch((error) => console.log(error))
    }, []);


    //array of months
    const arrayMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

    //months list
    const monthsList = () => {
        return (
            <select id="months" onChange={() => selectMonth()} disabled={!isSelectedMonth}>
                {
                    arrayMonths.length && arrayMonths.map((month, i) => {
                        return (
                            <option key={i} value={month}>{month}</option>
                        )
                    })

                }
            </select>
        )
    }
    //get select value
    const selectMonth = () => {
        let S = document.getElementById('months');
        const monthSelected = S.options[S.selectedIndex].value;
        //setState with the new month
        setSelectedMonth(monthSelected);
    }

    // make a choice
    const radioChoice = () => {
        if (document.getElementById('month').checked) {
            setIsSelectedMonth(true);
        }
        if (document.getElementById('category').checked) {
            setIsSelectedMonth(false);
        }
    }
    //list result
    const Listlegumes = () => {
        return (
            legume.length && legume.map((item) => {
                const letter = Object.keys(item)[0];
                const E = item[letter].map((elm, index) => {
                    //if elm.mois contain month selected
                    if (!!selectedMonth && !!elm.mois && !elm.mois.includes(selectedMonth)) {
                        console.log(('test'))
                        console.log(elm.Nom)
                        return <></>
                    }
                    else {
                        return (
                            <li key={index}>
                                {
                                    elm.Nom
                                }
                            </li>
                        )
                    }

                })
                if(isSelectedMonth){
                    return E;
                }
                
            })
        )
    }

    return (
        <>
            <div className="select-categorie d-flex">
                <label htmlFor="month" className="mr-5">
                    Par mois <input type="radio" name="month-category" id="month"
                        onChange={() => radioChoice()} />
                </label>
                <label htmlFor="category">
                    Par catégorie <input type="radio" name="month-category" id="category"
                        onChange={() => radioChoice()}
                            />
                </label>
            </div>
                <div className="d-flex flex-column select-list">
                    Coeur de saison
                {monthsList()}
                </div>

                <h2 className="mb-2">Légumes du mois de {selectedMonth} </h2>
                <ul>
                    {
                        Listlegumes()
                    }
                </ul>
        </>

    )
}

export default Results;
