import {useState, useEffect} from 'react'


export const useApi = (search: string): {isLoaded: Boolean, items: any, error: any} => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1285213a1b770d1df95522fc1bb6ff1b&units=metric&lang=sk`)
            .then(res => res.json())
            .then((result) => {
                const coord = result && result.coord as {lat: number, lon: number} | null;
                return coord;
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                return null;
            })
            .then((coord) => {
                if (!coord) return;
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly&appid=1285213a1b770d1df95522fc1bb6ff1b&units=metric&lang=sk`)
                    .then(res => res.json())
                    .then((result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    })
            })
    }, [search])

    return {isLoaded, items, error}
}
