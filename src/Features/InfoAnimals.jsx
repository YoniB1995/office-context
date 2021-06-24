import * as React from 'react'
import {Wolf,Birdie,Nemo,Ant,Cat} from './AppRouter/AnimalWiki'
import styled from 'styled-components'


export default function InfoAnimals() {
const animalsArr = [Wolf,Birdie,Nemo,Ant,Cat]
// const animalsPic = ["https://timesofindia.indiatimes.com/photo/67586673.cms",""]
    return (
        <div>
            <h1>Animals Wiki </h1>
            <div className="animalCardWiki">
                {animalsArr.map((animal)=><p className="paraAnimal">{animal}</p>)}

            </div>
        </div>
    )
}
