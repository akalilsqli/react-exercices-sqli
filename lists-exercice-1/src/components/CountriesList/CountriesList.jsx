import countriesData from '../../data/data.json';
import Country from '../Country/Country';

const CountriesList = () => { 
    const worldPopulation = countriesData[0].population;

    return (<ul>
        {countriesData.map(({country , population} , index) => {
            return <Country key={index} country={country} population={population} percentage={(population / worldPopulation) * 100}/>
        })}
    </ul>
    )
}

export default CountriesList;