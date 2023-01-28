import React from 'react'

const Buteurs = () => {
    const Buteurs = [
        {
            "id": 1,
            "player": { "player_id": 19779, "player_name": "Karim Benzema" },
            "team": "Real Madrid",
            "goals": { "home": 7, "away": 7 },
        },
        {
            "id": 2,
            "player": { "player_id": 4934, "player_name": "Hakim ziyach" },
            "team": "chelsea",
            "goals": { "home": 9, "away": 4 },
        }
    ];
    {/* 3*/ }
    let x = Buteurs.map(
        elem => elem.goals.home
    )
    let mostgoalsinhomeis = Math.max(...x)
    console.log(mostgoalsinhomeis)

    {/* 4*/ }
    let y = Buteurs.map(
        elem => elem.goals.away
    )
    const TotalAwayGoals = y.reduce((fvalue, svalue) => fvalue + svalue, 0);
    console.log(TotalAwayGoals); // 6

    {/*  5 */ }
    let fragm = [{
        "id": 2,
        "player": { "player_id": 4934, "player_name": "Hakim ziyach" },
        "team": "inak",
        "goals": { "home": 9, "away": 4 },
    }]
    let newarray = [...Buteurs].concat(fragm)
    console.log(newarray)
    return (
        <>
            {/* 1  */}
            {Buteurs.filter(
                elem => elem.player.player_name == "Karim Benzema").map((elems) =>
                    <p>
                        {JSON.stringify(elems.goals)}
                    </p>)}

            {/* 2  */}
            {Buteurs.filter(
                elem => elem.goals.away > 3).length}
        </>

    )
}
export default Buteurs